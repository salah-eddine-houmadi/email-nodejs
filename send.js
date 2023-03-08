const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
   service: "gmail",
   auth: {
      user: "example@gmail.com",
      pass: "YOUR_APP_PASSWORD"
   }
});

const mailOptions = {
   from: "example@gmail.com",
   to: "example@example.com",
   subject: "Nodemailer Test",
   html: "Test <button>sending</button> Gmail using Node JS"
};

transporter.sendMail(mailOptions, function(error, info){
   if(error){
      console.log(error);
   }else{
      console.log("Email sent: " + info.response);
   }
});
