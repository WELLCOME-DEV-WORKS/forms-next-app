import { z } from "zod";
import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { CategoryValidator } from "@/lib/validators/categories";
/**
 * @swagger
 * /api/category:
 *   post:
 *     description: create a category
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *     responses:
 *       200:
 *         description: Good
 *       401:
 *         description: Unauthorized
 *       409:
 *         description: Category Already exists
 *       422:
 *         description: Schema Error
 *       500:
 *         description: Serverside error
 */
export async function POST(req: Request) {
  try {
    const session = await getAuthSession();

    if (!session?.user) {
      return new Response("Unauthorized", { status: 401 });
    }
    // need to check user role == admin

    const body = await req.json();
    const { name } = CategoryValidator.parse(body); // throws error on parse failure

    const categoryExists = await db.category.findFirst({
      where: {
        name,
      },
    });

    if (categoryExists) {
      return new Response("Category name already exists", { status: 409 });
    }

    const category = await db.category.create({
      data: {
        name,
      },
    });

    // await db.subscribiton.create()

    return new Response(category.name);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 422 });
    }

    return new Response("Could not create a category", { status: 500 });
  }
}
