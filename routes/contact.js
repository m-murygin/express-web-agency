'use strict';

const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'murygin.development@gmail.com',
    pass: '36v83NxyOR53dFk'
  }
});

router.get('/', function(req, res) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send', function (req, res) {
  let message = `You have a new submission with the following details... \n` + 
    `Name: ${req.body.name}, Email: ${req.body.email}`;

  let mailOptions = {
    from: 'John Doe <murygin.development@gmail.com>',
    to: 'muriginm@gmail.com',
    subject: 'Website Submission',
    text: message,
    html: '<h1>New Submission</h1><p> You got a new submission</p>'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      res.redirect('/');
      console.log(error);
    } else {
      res.redirect('/');
      console.log('Message sent: ' + info.response);
    }
  });
});

module.exports = router;
