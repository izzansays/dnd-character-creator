import { useState } from "react";
import {
  FormProvider,
  useForm,
} from "react-hook-form";
import { type CharacterCreatorSchema, characterCreatorSchema, steps } from "../../types/form"
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@base-ui-components/react";

import Species from "./Species";
import Class from "./Class";

export default function CharacterCreator() {
  const [activeStep, setActiveStep] = useState(1);
  const methods = useForm<CharacterCreatorSchema>({
    shouldUnregister: false,
    mode: "onChange",
    resolver: zodResolver(characterCreatorSchema),
    defaultValues: {
      stepOne: {
        species: ""
      }
    }
  });
  const { handleSubmit } = methods;

  const onSubmit = (data: CharacterCreatorSchema) => {
    console.log(data);
  };

  const onNext = async (schema: keyof CharacterCreatorSchema) => {
    const isValid = await methods.trigger(schema);
    if (isValid) {
      setActiveStep((step) => step + 1);
    }
  };

  const onPrev = () => {
    setActiveStep((step) => step - 1);
  }

  return (
    <FormProvider {...methods}>
      <div className="flex gap-4">
        {steps.map((step) =>
          <span key={step}>{step}</span>
        )}
      </div>
      <Form
        className="flex w-full max-w-64 flex-col gap-4 mx-auto" onSubmit={handleSubmit(onSubmit)}>
        {activeStep === 1 && <Species onNext={onNext} />}
        {activeStep === 2 && <Class onNext={onNext} onPrev={onPrev} />}

        {/* Add rest of steps here */}
      </Form>
    </FormProvider>
  );
}