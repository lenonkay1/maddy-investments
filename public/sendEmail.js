const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'lenonkay1@gmail.com',
        pass: 'memo@2001'
    }
});
