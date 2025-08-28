import { Controller, useFormContext } from "react-hook-form";
import type { CharacterCreatorSchema } from "@/types/form";
import { Field, Fieldset, Radio, RadioGroup } from "@base-ui-components/react";

interface ClassProps {
  onNext: (schema: keyof CharacterCreatorSchema) => void;
  onPrev: () => void;
}

export default function Class({ onNext, onPrev }: ClassProps) {
  const { control } = useFormContext<CharacterCreatorSchema>();

  const cls = [
    'barbarian',
    'bard',
    'cleric',
    'druid',
    'figher',
    'monk',
    'paladin',
    'ranger',
    'rogue',
    'sorceror',
    'warlock',
    'wizard',
  ]

  return (
    <>
      <Controller
        control={control}
        name="stepTwo.class"
        render={({ field }) => (
          <Field.Root name="class" render={<Fieldset.Root />}>
            <RadioGroup
              className="flex flex-col items-start gap-1 text-gray-900"
              value={field.value}
              onValueChange={field.onChange}
            >
              <Fieldset.Legend className="font-medium">
                Choose your class
              </Fieldset.Legend>
              {cls.map((cls) =>
                <Field.Label key={cls} className="flex items-center gap-2">
                  <Radio.Root
                    value={cls}
                    className="flex size-5 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 data-[checked]:bg-gray-900 data-[unchecked]:border data-[unchecked]:border-gray-300"
                  >
                    <Radio.Indicator className="flex before:size-2 before:rounded-full before:bg-gray-50 data-[unchecked]:hidden" />
                  </Radio.Root>
                  {cls}
                </Field.Label>
              )}
            </RadioGroup>
          </Field.Root>
        )}
      />
      <button type="button" onClick={onPrev}>
        Previous
      </button>
      <button type="button" onClick={() => onNext("stepTwo")}>
        Next
      </button>
    </>
  );
}