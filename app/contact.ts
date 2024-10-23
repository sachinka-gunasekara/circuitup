import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.example.com', // Replace with your SMTP host
  port: 587,
  auth: {
    user: 'your-email@example.com', // Your email
    pass: 'your-email-password', // Your email password
  },
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
      await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: 'your-company-email@example.com', // Replace with your company's receiving email
        subject: subject,
        text: message,
      });

      return res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Failed to send message.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
