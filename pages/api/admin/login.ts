import type { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).end('Method Not Allowed');
    }

    const { password } = req.body;

    if (password === process.env.ADMIN_PASSWORD) {
        const cookie = serialize('admin', 'true', {
            httpOnly: true,
            path: '/',
            maxAge: 60 * 60 * 24, // 1 Tag
        });

        res.setHeader('Set-Cookie', cookie);
        return res.status(200).json({ success: true });
    } else {
        return res.status(401).json({ error: 'Unauthorized' });
    }
}
