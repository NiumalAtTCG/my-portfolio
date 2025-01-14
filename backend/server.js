require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Check if all fields are provided
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your email for authentication
        pass: process.env.EMAIL_PASS, // Your app password
      },
    });

    // Send email with "from" set as the user's email and "to" set as your email
    await transporter.sendMail({
      from: email, // User's email as the sender
      to: process.env.EMAIL_USER, // Your email as the recipient
      subject: `Message from ${name}`, // Subject of the email
      text: message, // Email body
      replyTo: email, // Set reply-to to the user's email
    });

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send email." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
