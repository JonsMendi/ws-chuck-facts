import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

/**
 * Here we handle the requests to the database
 * @param req the request
 * @param res the response
 */

export default async function handler(req: any, res: any) {
  const fact = req.body.fact;

  try {
    const newFact = await prisma.jokes.create({
      data: {
        value: fact,
      },
    });

    res.status(200).json(newFact);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not find fact" });
  }
}