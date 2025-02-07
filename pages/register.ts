// register.ts - Backend-Handler für Registrierung oder Hilfsfunktion
export const registerUser = async (username: string, email: string, password: string) => {
    try {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password }),
        });

        if (!response.ok) {
            throw new Error('Registrierung fehlgeschlagen');
        }

        return await response.json();
    } catch (error) {
        console.error('Fehler bei der Registrierung:', error);
        throw error;
    }
};
