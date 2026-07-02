import { transporter } from "../config/nodemailer.js";

export const sendEmail = async ({ to, subject, html }) => {
    try {
        const info = await transporter.sendMail({
            from: process.env.SMTP_FROM,
            to,
            subject,
            html,
        });

        console.log("✅ Email Sent:", info.messageId);

        return info;
    } catch (error) {
        console.error("❌ Email Error:", error.message);
        throw error;
    }
};