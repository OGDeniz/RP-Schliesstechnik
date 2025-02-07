import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { vorname, nachname, email, telefon, strasse, hausnummer, plz, ort } = req.body;

        // SMTP-Konfiguration für Nodemailer
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST, // Beispiel-Host, z. B. smtp.gmail.com
            port: process.env.EMAIL_PORT, // SMTP-Port (z. B. 465 für SSL)
            secure: false, // true 
            auth: {
                user: process.env.EMAIL_USER, // Deine E-Mail-Adresse
                pass: process.env.EMAIL_PASS,          // Dein E-Mail-Passwort
            },
        });

        // E-Mail-Inhalt
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'info@schluesselrp.de',
            subject: 'Neue Bestellung auf Rechnung',
            text: `
                Neue Bestellung:
                Vorname: ${vorname}
                Nachname: ${nachname}
                E-Mail: ${email}
                Telefon: ${telefon}
                Adresse: ${strasse} ${hausnummer}, ${plz} ${ort}

                Bestellung:
                Kurze Beschreibung des Problems:
                ${req.body.bestellung}
            `,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Rechnung erfolgreich versendet' });
        } catch (error) { console.error('Fehler beim Versenden der E-Mail:', error.message);
            console.error('Stack Trace:', error.stack);
            res.status(500).json({ error: error.message });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
