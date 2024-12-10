import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.titan.email", // Replace with your SMTP host
  port: 465,
  auth: {
    user: "willo@nexvertical.com", // Your email
    pass: "willoNex@24", // Your email password
  },
});

export const POST = async (req: Request) => {
  const data = await req.json();
  console.log("response", data);

  const { name, email, subject, message } = data;

  if (!name || !email || !subject || !message) {
    return
  }
  // return Response.json({ message: "1232131" });

  try {
    await transporter.sendMail({
      from: `willo@nexvertical.com`,
      to: `yashodhalakshana@gmail.com`, // Replace with your company's receiving email
      subject: subject,
      text: message,
      html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.5;">
                <div style="font-size: 14px; color: #888;">
                    <strong>Sender:</strong> ${name} (${email})
                </div> <br />
                <div style="font-size: 16px; color: #555; margin-bottom: 20px;">
                    ${message}
                </div>
            </div>
        `,
    });

    return Response.json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send message.");
  }
};