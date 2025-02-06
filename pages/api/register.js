import { query } from './db'; // Prüfe, ob der Pfad zu db.js korrekt ist.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { username, password, name, address } = req.body;

  if (!username || !password || !name || !address) {
    return res.status(400).json({ message: 'Alle Felder müssen ausgefüllt werden.' });
  }

  try {
    const existingUser = await query('SELECT * FROM users WHERE username = ?', [username]);
    if (existingUser.length > 0) {
      return res.status(409).json({ message: 'Benutzername bereits vergeben.' });
    }

    // Passwort hashen (falls nötig)
    const hashedPassword = await hash(password, 10);

    await query(
      'INSERT INTO users (username, password, name, address) VALUES (?, ?, ?, ?)',
      [username, hashedPassword, name, address]
    );

    return res.status(201).json({ message: 'Benutzer erfolgreich registriert.' });
  } catch (error) {
    console.error('Fehler bei der Registrierung:', error);
    return res.status(500).json({ message: 'Interner Serverfehler.' });
  }
}
