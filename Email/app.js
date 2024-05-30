// rqkvecseqwgjsgvb

const nodemailer = require("nodemailer");//nodemailer is not a built in module

const transporter = nodemailer.createTransport({ //transport method is having authentication procedure
    service:"gmail",
    auth: {
    user: "walvepallavi02@gmail.com", //our own mail id 
    pass: "rqkvecseqwgjsgvb", //paste app password 
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: "<walvepallavi02@gmail.com>", // sender address
    to: "shindeshreya1250@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);
