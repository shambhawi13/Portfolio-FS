const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sham@gmail.com',
    pass: process.env.EMAIL_PASS 
  }
});

function mailOptions (email,item){
  var list = item.join(", ")
  
  let mailOptions = {
        from: 'test@something.com',
        to: `${email}`,
        subject: `Looking to connect`,
        text: `Thank you. `
      };
      return mailOptions;
}


function sendMail(email,item){
  if(item.length>0){
    transporter.sendMail(mailOptions(email,item), function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }
}

module.exports = sendMail;
