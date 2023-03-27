import { User } from './database/entities/User';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { AppDataSource } from './database/data-source';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<User[]>
) {

    await AppDataSource.initialize()
        .catch(e => console.log(e))

}
