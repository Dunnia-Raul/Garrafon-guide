const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();
dotenv.config({path:"./.env.private"});

const {GMAIL_USER, GMAIL_PASSWORD } = process.env;
console.log(`Mail transport: ${GMAIL_USER} - ${GMAIL_PASSWORD}`);

let transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASSWORD
    }
});

module.exports = {
    transport
}