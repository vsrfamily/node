var nodemailer = require('nodemailer');
var sender = nodemailer.createTransport({
  service:'gmail',
  auth: {
    user:'Your username',
    pass:'your password'
  }
});
var composemail = {
  from: 'xyz@gmail.com',
  to: 'abc@gmail.com', 'def@gmail.com',
  subject: 'send mail using node js',
  html: '<h1>This is my first gmail </h1>'
  
};

sender.sendMail(composemail, function(error, info) {
  if(error)
  {
    console.log(error);
  }
  else {
    console.log('mail sent successfully', + info.response);
  }
});

  
