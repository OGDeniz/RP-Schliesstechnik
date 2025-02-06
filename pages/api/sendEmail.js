import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        // E-Mail-Versand mit Nodemailer konfigurieren und durchführen, d.h. "service:" steht für den E-Mail-Service, "auth:" für die Authentifizierung, "user:" für den Benutzernamen und "pass:" für das Passwort
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST, // SMTP-Host
            port: process.env.EMAIL_PORT, // Port, z.B. 587 für TLS
            secure: false, // true für 465, false für 587
            auth: {
                user: process.env.EMAIL_USER, // Benutzername aus .env
                pass: process.env.EMAIL_PASS, // Passwort aus .env
            },
        });

        try {
            await transporter.sendMail({
                from: process.env.EMAIL_USER, // Absender-Adresse
                to: 'info@schluesselrp.de', // Empfänger-Adresse
                subject: `Kontaktanfrage von ${name, email}`, // Betreff
                text: message,
                html: `<p><strong>Von:</strong> ${name} (${email})</p><p>${message}</p>`,
            });

            res.status(200).json({ success: true });
        } catch (error) {
            console.error('Error beim Senden der E-Mail:', error);
            res.status(500).json({ success: false, error: 'E-Mail-Versand fehlgeschlagen.' });
        }
    } else {
        res.status(405).json({ message: 'Nur POST-Anfragen erlaubt.' });
    }
}
