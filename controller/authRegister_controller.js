const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('database.db')
const CryptoJS =require('crypto-js')
const nodemailer = require('nodemailer')

function send_mail(email){
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'enoqyanarsen@gmail.com',
            pass: 'wibnuqwqxdvrhysn'
        }
    });
    const mailOptions = {
        from: 'enoqyanarsen@gmail.com',
        to: email,
        subject: 'Congratulations!',
        text:'Your account is succesfully created'
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error){
            console.log(error);
        } else {
            console.log('Email sent:' + info.response);
        }
    });
}
exports.registerController =(req, res) => {
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email
    const hashed_password = CryptoJS.SHA256(password).toString();
    let sql = "INSERT INTO users (username,password,email) VALUES (?,?,?)"
    db.run(sql, [username, hashed_password, email], function(err){
          if(err){
              res.send(JSON.stringify({status: "Error Registering"}))
          }
          res.send(JSON.stringify({status: "User Created"}))
      }) 
      send_mail(email); 
  }




