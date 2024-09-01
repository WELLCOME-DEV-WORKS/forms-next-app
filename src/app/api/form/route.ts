import { getAuthSession } from '@/lib/auth'
import { db } from '@/lib/db'
import { FormDataValidator } from '@/lib/validators/form'
import { z } from 'zod'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {   
      wantsSkinImprovement,
      wantsSkinToneImprovement,
      wantsAcneTreatment,
      wantsImmediateEffect,
      wantsShortRecovery,
      wantsBudgetBelow100,
      wantsLessIntensive } = FormDataValidator.parse(body)

    const session = await getAuthSession()

    if (!session?.user) {
      return new Response('Unauthorized', { status: 401 })
    }

    await db.form.create({
      data: {
        wantsSkinImprovement,
        wantsSkinToneImprovement,
        wantsAcneTreatment,
        wantsImmediateEffect,
        wantsShortRecovery,
        wantsBudgetBelow100,
        wantsLessIntensive,
        userId: session.user.id,
      },
    })

    return new Response('OK')
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 400 })
    }

    return new Response(
      'Could not post this form at this time. Please try later',
      { status: 500 }
    )
  }
}