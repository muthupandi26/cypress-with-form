const AWS = require('aws-sdk');
const nodemailer = require('nodemailer');

AWS.config.update({
  accessKeyId: process.env.AWS_SES_ACCESSKEYID,
  secretAccessKey: process.env.AWS_SES_SECRETACCESSKEY,
  region: process.env.AWS_SES_REGION,
});


const transporter = nodemailer.createTransport({
  SES: new AWS.SES({apiVersion: '2010-12-01'})
});

const sendEmail = (config) => {
  if (!config) {
    console.error("Must pass in config to sendEmail");
    return;
  }  
  if (!process.env.EMAIL_ON_AWS) {
    if (config.callback) {
      config.callback();
    }
    return;
  }

  const toAddress = config.to ? config.to : process.env.TO_EMAIL;
  const toAddresses = Array.isArray(toAddress) ? toAddress : toAddress.split(";");
  const fromAddress = config.from ? config.from : process.env.FROM_EMAIL;

  const message = {
    bcc: toAddresses,
    subject: config.subject,
    text: config.text,
    html: config.html,
    from: fromAddress,
    sender: fromAddress
  };

  if (config.attachmentFiles && config.attachmentFiles.length > 0) {
    message.attachments = config.attachmentFiles.reduce( (attachments, filePath) => {
      attachments.push({
        filename: filePath.replace(/^.*(\\|\/|\:)/,''),
        path: filePath,
        cid: filePath.replace(/\s+/, '_') + '@demotest.com'
      });
      return attachments;
    }, []);
  }

  transporter.sendMail(message, (error, info) => {
    if (error) {
        console.log('Error occurred');
        console.log(error.message);
        return process.exit(1);
    }

    console.log('Message sent successfully!');
    console.log(nodemailer.getTestMessageUrl(info));

    // only needed when using pooled connections
    transporter.close();

    if (config.callback) {
      config.callback();
    }
  });
}

module.exports = {sendEmail};