import { z } from 'zod'

export const FormDataSchema = z.object({
  wantsSkinImprovement: z.preprocess(Boolean, z.boolean()),
  wantsSkinToneImprovement: z.preprocess(Boolean, z.boolean()),
  wantsAcneTreatment: z.preprocess(Boolean, z.boolean()),
  wantsImmediateEffect: z.preprocess(Boolean, z.boolean()),
  wantsShortRecovery: z.preprocess(Boolean, z.boolean()),
  wantsBudgetBelow100: z.preprocess(Boolean, z.boolean()),
  wantsLessIntensive: z.preprocess(Boolean, z.boolean()),
})

export const FormDataValidator = z.object({
  wantsSkinImprovement: z.preprocess(Boolean, z.boolean()),
  wantsSkinToneImprovement: z.preprocess(Boolean, z.boolean()),
  wantsAcneTreatment: z.preprocess(Boolean, z.boolean()),
  wantsImmediateEffect: z.preprocess(Boolean, z.boolean()),
  wantsShortRecovery: z.preprocess(Boolean, z.boolean()),
  wantsBudgetBelow100: z.preprocess(Boolean, z.boolean()),
  wantsLessIntensive: z.preprocess(Boolean, z.boolean()),
})