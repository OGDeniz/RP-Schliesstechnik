import type { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../lib/mysql';
import fs from 'fs';
import path from 'path';

export type HealthStatus = {
    db: 'ok' | 'error';
    fs: 'ok' | 'error';
    overall: 'ok' | 'error';
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<HealthStatus>) {
    if (req.method !== 'GET') {
        return res.status(405).end();
    }

    let dbStatus: 'ok' | 'error' = 'error';
    let fsStatus: 'ok' | 'error' = 'error';

    try {
        await query('SELECT 1');
        dbStatus = 'ok';
    } catch {
        dbStatus = 'error';
    }

    try {
        const filePath = path.join(process.cwd(), 'components', 'data', 'viewCount.json');
        fs.readFileSync(filePath, 'utf-8');
        fsStatus = 'ok';
    } catch {
        fsStatus = 'error';
    }

    const overall = dbStatus === 'ok' && fsStatus === 'ok' ? 'ok' : 'error';

    return res.status(200).json({ db: dbStatus, fs: fsStatus, overall });
}