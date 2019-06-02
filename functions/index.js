const functions = require('firebase-functions');
const admin = require('firebase-admin')
const nodemailer = require('nodemailer')

admin.initializeApp()

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'skysyslk1@gmail.com',
        pass: 'emoxqwhagtqkvwwx'
    }
});

exports.sendMail = functions.https.onRequest((req,res) => {

    const dest = "skysyslk1@gmail.com";
    const emailFrom = req.query.from
    const message = req.query.message
    const name = req.query.name
    const subject = req.query.subject


    const mailOption = {
        from: 'skysyslk.github.io <skysyslk1@gmail.com>',
        to: dest,
        cc: [
            'danushkaherath96@gmail.com',
            'ravindusachintha53@gmail.com',
            'shehanhere@gmail.com',
            'sacheerc@gmail.com',
            'asithaindrajithk9@gmail.com'
        ],
        subject: subject,
        html: `<h2> You have recieved a new message </h2>
                <p> <b>email:</b> ${emailFrom} </p>
                <p> <b>name: </b> ${name}</p>
                <p> <b>subject: </b> ${subject}</p>
                <p> <b>message: </b> ${message}</p>`
    }

    return transporter.sendMail(mailOption, (err, info) => {
        if(err){
            res.send('Error: '+ err)
            return;
        }else{
            res.send('message Sent')
            return
        }
    })
})