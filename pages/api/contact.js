import { mailOptions, transporter } from "@/config/nodemailer";
import axios from "axios";
const verifyRecaptcha = async (token) => {
  const secretKey = process.env.SECRET_KEY;

  var verificationUrl =
    "https://www.google.com/recaptcha/api/siteverify?secret=" +
    secretKey +
    "&response=" +
    token;

  return await axios.post(verificationUrl);
};

const handler = async (req, res) => {
  try {
    const token = req.body.gReCaptchaToken;

    const response = await verifyRecaptcha(token);
    const data = req.body.data;
    if (response.data.success && response.data.score >= 0.5) {
      if (req.method === "POST") {
        if (!data.name || !data.company || !data.email) {
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
          console.log("success");
        } catch (error) {
          console.log(error);
          return res.status(400).json({ message: error.message });
        }
      }
    } else {
      return res.json({
        status: "error",
        message: "Something went wrong, please try again!!!",
      });
    }
  } catch (error) {
    console.log("ERRRRROr", error);
    res.json({
      status: "error",
      message: "Something went wrong, please try again!!!",
    });
  }
  return res.status(400).json({ message: "Bad request" });
};

export default handler;
