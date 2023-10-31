// services/mailService.js
import nodemailer from "nodemailer";

const createTransport = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "YOUR_EMAIL@gmail.com",
      clientId: "YOUR_CLIENT_ID",
      clientSecret: "YOUR_CLIENT_SECRET",
      refreshToken: "YOUR_REFRESH_TOKEN",
    },
  });
};

export const sendMail = async (to, subject, text) => {
  let mailOptions = {
    from: "YOUR_EMAIL@gmail.com",
    to: to,
    subject: subject,
    text: text,
  };

  let transporter = createTransport();

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve(info);
      }
    });
  });
};
