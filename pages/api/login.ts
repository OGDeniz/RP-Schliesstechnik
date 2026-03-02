import { compare } from 'bcryptjs';
import { query } from '../../lib/mysql';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Benutzername und Passwort sind erforderlich.' });
  }

  try {
    const users = await query('SELECT username, password, name FROM users WHERE username = ? LIMIT 1', [username]);
    const user = users?.[0];

    if (!user) {
      return res.status(401).json({ message: 'Ungültige Zugangsdaten.' });
    }

    const isValid = await compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({ message: 'Ungültige Zugangsdaten.' });
    }

    return res.status(200).json({ message: 'Login erfolgreich.', name: user.name });
  } catch (error) {
    console.error('Fehler beim Login:', error);
    return res.status(500).json({ message: 'Interner Serverfehler.' });
  }
}
