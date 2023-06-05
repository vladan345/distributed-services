// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { mailOptions, transporter } from "@/config/nodemailer";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    if (
      !data.name ||
      !data.company ||
      !data.email ||
      !data.country ||
      !data.budget ||
      !data.comment
    ) {
      return res.status(400).json({ message: "Bad request" });
    }
    try {
      await transporter.sendMail({
        ...mailOptions,
        text: "This is test string",
        html: `<h1>A new contact form submission!</h1>
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Company:</b> ${data.company}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Country:</b> ${data.country}</p>
        <p><b>Budget:</b> ${data.budget}</p>
        <p><b>Comment:</b> ${data.comment}</p>`,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }

  return res.status(400).json({ message: "Bad request" });
};

export default handler;
