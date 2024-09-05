import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { FormDataValidator } from "@/lib/validators/form";
import { z } from "zod";

/**
 * @swagger
 * /api/form:
 *   post:
 *     description: upload form to server
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                wantsSkinImprovement:
 *                  type: boolean
 *                wantsSkinToneImprovement:
 *                  type: boolean
 *                wantsAcneTreatment:
 *                  type: boolean
 *                wantsImmediateEffect:
 *                  type: boolean
 *                wantsShortRecovery:
 *                  type: boolean
 *                wantsBudgetBelow100:
 *                  type: boolean
 *                wantsLessIntensive:
 *                  type: boolean
 *     responses:
 *       200:
 *         description: Good
 *       401:
 *         description: Unauthorized
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      wantsSkinImprovement,
      wantsSkinToneImprovement,
      wantsAcneTreatment,
      wantsImmediateEffect,
      wantsShortRecovery,
      wantsBudgetBelow100,
      wantsLessIntensive,
    } = FormDataValidator.parse(body);

    const session = await getAuthSession();

    if (!session?.user) {
      return new Response("Unauthorized", { status: 401 });
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
    });

    return new Response("OK");
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 400 });
    }

    return new Response(
      "Could not post this form at this time. Please try later",
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  const url = new URL(req.url);

  const session = await getAuthSession();

  // if (session) {
  //   const followedCommunities = await db.form.findMany({
  //     where: {
  //       userId: session.user.id,
  //     },
  //     include: {
  //       subreddit: true,
  //     },
  //   })

  //   followedCommunitiesIds = followedCommunities.map((sub) => sub.subreddit.id)
  // }

  try {
    const { limit, page } = z
      .object({
        limit: z.string(),
        page: z.string(),
      })
      .parse({
        limit: url.searchParams.get("limit"),
        page: url.searchParams.get("page"),
      });

    let whereClause = {};

    const forms = await db.form.findMany({
      take: parseInt(limit),
      skip: (parseInt(page) - 1) * parseInt(limit), // skip should start from 0 for page 1
      orderBy: {
        createdAt: "desc",
      },
      include: {
        user: true,
      },
      where: whereClause,
    });

    return new Response(JSON.stringify(forms));
  } catch (error) {
    return new Response("Could not fetch form(s)", { status: 500 });
  }
}
