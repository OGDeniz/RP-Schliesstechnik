  import { hash } from 'bcryptjs';


export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: 'Benutzername und Passwort sind erforderlich' });
        }

        try {
            const { db } = await connectToDatabase();

            const existingUser = await db.collection('users').findOne({ username });
            if (existingUser) {
                return res.status(409).json({ message: 'Benutzername bereits vergeben' });
            }

            const hashedPassword = await hash(password, 10);

            await db.collection('users').insertOne({
                username,
                password: hashedPassword,
                createdAt: new Date(),
            });

            return res.status(201).json({ message: 'Benutzer erfolgreich registriert' });
        } catch (error) {
            console.error('Fehler bei der Registrierung:', error);
            return res.status(500).json({ message: 'Interner Serverfehler' });
        }
    } else {
        res.status(405).json({ message: 'Methode nicht erlaubt' });
    }
}
