const nodemailer = require("nodemailer");
const secretData = require("../secret");

const emailServer = {
  host: secretData.smtp.host,
  port: secretData.smtp.port,
  secure: false,
  auth: {
    user: secretData.smtp.username,
    pass: secretData.smtp.password,
  },
};

const transporter = nodemailer.createTransport(emailServer);

const emailSend = async (emaildata) => {
  try {
    const emailOptions = {
      from: secretData.smtp.formAddress, // sender address
      to: emaildata.email, // list of receivers
      subject: emaildata.subject, // Subject line
      // text: emaildata.text, // plain text body
      html: emaildata.html, // html body
    };

    const info = await transporter.sendMail(emailOptions);

    console.log("Email sent: ", info.response);
  } catch (error) {
    console.error("Error occured while sending email: ", error);
    throw error;
  }
};

module.exports = { emailSend };
