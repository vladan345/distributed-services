import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email, // generated ethereal user
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: [email, "aljosa@distributedservices.tech"],
  subject: "Distributed Services Submission",
};
