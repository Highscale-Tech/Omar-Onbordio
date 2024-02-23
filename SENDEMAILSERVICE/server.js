const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(bodyParser.json());
app.use( cors({
  origin: 'http://localhost:5173',
  credentials: true
}) );

const transport = nodemailer.createTransport({
    service:"gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, 
    auth: {
      user: process.env.USER,
      pass: process.env.APP_PASSWORD,
    },
  });
app.post('/send', async (req, res) => {
  try {
    const { to, subject, body } = req.body;
    await transport.sendMail({
      from: process.env.USER,
      to: to,
      subject: subject,
      text: body,
    });
    res.send('Email sent successfully');
  } catch (error) {
    res.status(500).send('Failed to send email due to an error: ' + error.message);
  }
});


const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});