// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = Array<{
  name: string
  telefone: string
  email: string
}>;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json([
    {name: 'Zadson', telefone: '123456789', email: 'zadson65@gmail.com'},
    {name: 'Welll', telefone: '123456789', email: 'Well@gmail.com'},
    {name: 'Higor', telefone: '123456789', email: 'Higor@gmail.com'},
    {name: 'Bruno', telefone: '123456789', email: 'Bruno@gmail.com'}
  ]);
}
