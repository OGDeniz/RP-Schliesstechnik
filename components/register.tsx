import { useState } from 'react';
import axios from 'axios';

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!username || !password || !firstName || !lastName) {
            setMessage('Alle Felder müssen ausgefüllt werden.');
            return;
        }

        try {
            const response = await axios.post('/api/register', {
                username,
                password,
                first_name: firstName,
                last_name: lastName,
            });

            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response?.data?.message || 'Registrierung fehlgeschlagen.');
        }
    };

    return (
        <div>
            <h1>Registrierung</h1>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Benutzername"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Passwort"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Vorname"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Nachname"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
                <button type="submit">Registrieren</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}
