import { z } from 'zod';

const speciesSchema = z.object({
  species: z.string(),
  // subSpecies: z.string().optional()
})

const classSchema = z.object({
  class: z.string(),
})

const backgroundSchema = z.object({
  background: z.string()
})

const abilitiesSchema = z.object({
  str: z.number().min(8),
  dex: z.number().min(8),
  con: z.number().min(8),
  wis: z.number().min(8),
  int: z.number().min(8),
  cha: z.number().min(8),
})

const skillsSchema = z.array(z.string())

const equipmentSchema = z.array(z.string())

const spellsSchema = z.array(z.string())

const detailsSchema = z.object({
  name: z.string(),
})

export const characterCreatorSchema = z.object({
  stepOne: speciesSchema,
  stepTwo: classSchema,
  stepThree: backgroundSchema,
  stepFour: abilitiesSchema,
  stepFive: skillsSchema,
  stepSix: equipmentSchema,
  stepSeven: spellsSchema,
  stepEight: detailsSchema,
})

export type CharacterCreatorSchema = z.infer<typeof characterCreatorSchema>;

export const steps: string[] = ["species", "class", "background", "abilities", "skills", "equipment", "spells", "details", "review"]