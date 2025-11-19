import type { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const cookie = serialize('admin', '', {
        path: '/',
        httpOnly: true,
        maxAge: 0, // Sofort löschen
    });

    res.setHeader('Set-Cookie', cookie);
    res.status(200).json({ message: 'Abgemeldet' });
}
