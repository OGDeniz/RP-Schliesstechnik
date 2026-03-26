import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'components', 'data', 'viewCount.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const { buttonType } = req.body;

            if (!buttonType || typeof buttonType !== 'string' || buttonType.trim() === '') {
                return res.status(400).json({ error: 'buttonType fehlt' });
            }

            const data = fs.readFileSync(filePath, 'utf-8');
            const json = JSON.parse(data);

            if (!json.buttonClicks) json.buttonClicks = {};

            if (!json.buttonClicks[buttonType]) {
                json.buttonClicks[buttonType] = { count: 0, lastClick: null };
            }

            json.buttonClicks[buttonType].count += 1;
            json.buttonClicks[buttonType].lastClick = new Date().toISOString();

            fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
            return res.status(200).json({ success: true, buttonClicks: json.buttonClicks });
        } catch (err) {
            console.error('Fehler beim Button-Tracking:', err);
            return res.status(500).json({ error: 'Interner Fehler' });
        }
    }

    if (req.method === 'DELETE') {
        try {
            const { buttonType } = req.body;

            const data = fs.readFileSync(filePath, 'utf-8');
            const json = JSON.parse(data);

            if (!json.buttonClicks) json.buttonClicks = {};

            if (buttonType === 'all') {
                json.buttonClicks = {};
            } else if (buttonType && json.buttonClicks[buttonType]) {
                json.buttonClicks[buttonType] = { count: 0, lastClick: null };
            } else {
                return res.status(400).json({ error: 'Ungültiger buttonType' });
            }

            fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
            return res.status(200).json({ success: true, buttonClicks: json.buttonClicks });
        } catch (err) {
            console.error('Fehler beim Button-Reset:', err);
            return res.status(500).json({ error: 'Interner Fehler' });
        }
    }

    if (req.method === 'GET') {
        try {
            const data = fs.readFileSync(filePath, 'utf-8');
            const json = JSON.parse(data);
            return res.status(200).json({ buttonClicks: json.buttonClicks || {} });
        } catch (err) {
            console.error('Fehler beim Lesen der Button-Daten:', err);
            return res.status(500).json({ error: 'Interner Fehler' });
        }
    }

    return res.status(405).json({ error: 'Methode nicht erlaubt' });
}
