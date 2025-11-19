import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'components', 'data', 'viewCount.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const data = fs.readFileSync(filePath, 'utf-8');
            const json = JSON.parse(data);
            json.count += 1;
            json.lastVisit = new Date().toISOString(); // Timestamp hinzufügen
            fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
            return res.status(200).json({ viewCount: json.count, lastVisit: json.lastVisit });
        } catch (err) {
            console.error('Fehler beim Schreiben:', err);
            return res.status(500).json({ error: 'Interner Fehler' });
        }
    }

    if (req.method === 'GET') {
        try {
            const data = fs.readFileSync(filePath, 'utf-8');
            const json = JSON.parse(data);
            return res.status(200).json({ viewCount: json.count, lastVisit: json.lastVisit });
        } catch (err) {
            console.error('Fehler beim Lesen:', err);
            return res.status(500).json({ error: 'Interner Fehler' });
        }
    }

    return res.status(405).json({ error: 'Methode nicht erlaubt' });
}
