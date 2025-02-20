import { hash } from 'bcryptjs';
import { connectToDatabase } from '../../lib/db';


export default async function handler(req: any, res: any) {
    try {
        const db = await connectToDatabase();
        const users = await db.collection("users").find({}).toArray();
        res.status(200).json(users);
    } catch (error) {
        console.error("Fehler:", error);
        res.status(500).json({ error: "Serverfehler" });
    }
}
