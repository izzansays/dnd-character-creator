import { Controller, useFormContext } from "react-hook-form";
import type { CharacterCreatorSchema } from "@/types/form";
import { Field, Fieldset, Radio, RadioGroup } from "@base-ui-components/react";

interface SpeciesProps {
  onNext: (schema: keyof CharacterCreatorSchema) => void;
}

export default function Species({ onNext }: SpeciesProps) {
  const { control } = useFormContext<CharacterCreatorSchema>();

  const species = ['dragonborn', 'dwarf', 'elf', 'gnome', 'goliath', 'halfling', 'human', 'orc', 'tiefling']

  return (
    <>
      <Controller
        control={control}
        name="stepOne.species"
        render={({ field }) => (
          <Field.Root name="species" render={<Fieldset.Root />}>
            <RadioGroup
              className="flex flex-col items-start gap-1 text-gray-900"
              value={field.value}
              onValueChange={field.onChange}
            >
              <Fieldset.Legend className="font-medium">
                Choose your species
              </Fieldset.Legend>
              {species.map((species) =>
                <Field.Label key={species} className="flex items-center gap-2">
                  <Radio.Root
                    value={species}
                    className="flex size-5 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 data-[checked]:bg-gray-900 data-[unchecked]:border data-[unchecked]:border-gray-300"
                  >
                    <Radio.Indicator className="flex before:size-2 before:rounded-full before:bg-gray-50 data-[unchecked]:hidden" />
                  </Radio.Root>
                  {species}
                </Field.Label>
              )}
            </RadioGroup>
          </Field.Root>
        )}
      />
      <button type="button" onClick={() => onNext("stepOne")}>
        Next
      </button>
    </>
  );
}