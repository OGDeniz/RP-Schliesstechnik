import { useState } from 'react';
import axios from 'axios';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault(); // Verhindert das Neuladen der Seite

        try {
            // Sende die Login-Daten an die API
            const response = await axios.post('/api/login', {
                username,
                password,
                name,
                address,
            });

            // API-Antwort verarbeiten
            setMessage(`Willkommen, ${response.data.name}`);
        } catch (error) {
            // Fehlerbehandlung
            setMessage(error.response?.data?.message || 'Anmeldung fehlgeschlagen');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
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
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Adresse"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />
                <button type="submit">Anmelden</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}
