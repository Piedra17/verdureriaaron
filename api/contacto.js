    // pages/api/contacto.js
    import nodemailer from "nodemailer";

    export default async function handler(req, res) {
    if (req.method === "POST") {
        const { name, apellidos, celular, correo, mensaje } = req.body;

        const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        });

        try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: correo,
            subject: "Nuevo mensaje del formulario",
            text: `
            Nombre: ${name}
            Apellidos: ${apellidos}
            Celular: ${celular}
            Correo: ${correo}
            Mensaje: ${mensaje}
            `,
        });

        res.status(200).json({ success: true, message: "Correo enviado correctamente" });
        } catch (error) {
        res.status(500).json({ success: false, message: "Error al enviar el correo", error: error.message });
        }
    } else {
        res.status(405).json({ message: "Método no permitido" });
    }
    }
