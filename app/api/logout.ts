import { NextApiRequest, NextApiResponse } from 'next';
import { destroySession } from "@/lib/session";

export default async function Logout(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
  await destroySession();
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
