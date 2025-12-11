import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendResetEmail = async (email: string, token: string) => {
  const resetUrl = `${process.env.FRONTEND_URL || "http://localhost:3000"}/reset-password?token=${token}`;

  const mailOptions = {
    from: process.env.SMTP_FROM || "noreply@yourapp.com",
    to: email,
    subject: "Reset Password - Sistem BMN FASTe",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Reset Password Anda</h2>
        <p>Kami menerima permintaan reset password untuk akun Anda.</p>
        <p>Klik link berikut untuk mereset password:</p>
        <a href="${resetUrl}" style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 10px 0;">Reset Password</a>
        <p>Jika Anda tidak meminta reset password, abaikan email ini.</p>
        <p>Link ini akan kadaluarsa dalam 15 menit.</p>
        <p>Terima kasih,</p>
        <p>Tim Sistem BMN FASTe</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Reset email sent to:", email);
  } catch (error) {
    console.error("Error sending reset email:", error);
    throw new Error("Gagal mengirim email reset");
  }
};