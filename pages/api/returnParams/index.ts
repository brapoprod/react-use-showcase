import { NextApiRequest, NextApiResponse } from 'next';

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
    try {
        const params = _req.body;
        if (!params) {
            throw new Error('Empty body');
        }

        res.status(200).json(params);
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message });
    }
};

export default handler;
