import { query } from '../../lib/mysql';
import { hash } from 'bcryptjs';


export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { username, password, name, address, first_name, last_name } = req.body;
  const normalizedName = name || [first_name, last_name].filter(Boolean).join(' ').trim();
  const normalizedAddress = address ?? '';

  if (!username || !password || !normalizedName) {
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
      [username, hashedPassword, normalizedName, normalizedAddress]
    );

    return res.status(201).json({ message: 'Benutzer erfolgreich registriert.' });
  } catch (error) {
    console.error('Fehler bei der Registrierung:', error);
    return res.status(500).json({ message: 'Interner Serverfehler.' });
  }
}
