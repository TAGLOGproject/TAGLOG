import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export async function GET(req: NextApiRequest, res: NextApiResponse<Data>) {
  console.log(res);
  // res.status(200).json({ name: 'John Doe' });
  return new Response('dd');
}
