'use strict';

const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const config = require('../config.json');

const transporter = nodemailer.createTransport({
  service: config.service,
  auth: {
    user: config.email,
    pass: config.password
  }
});

router.get('/', function(req, res) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send', function (req, res) {
  const message = `You have a new submission with the following details... \n` + 
    `Name: ${req.body.name}, Email: ${req.body.email}`;

  const mailOptions = {
    from: 'John Doe <murygin.development@gmail.com>',
    to: config.destinationEmail,
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
