// Import necessary packages
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
//adding new code
const { google } = require('googleapis');
const OAuth2Data = require('./credentials.json');
//ending new code
// Load environment variables from .env file
dotenv.config();
//adding new code
const credentialsPath = path.join(__dirname, 'config', 'credentials.json');
const credentials = JSON.parse(fs.readFileSync(credentialsPath)).web;
//ending new code

// Create a transporter object using OAuth2
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.USER_EMAIL,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
    },
});
//adding new code
app.get('/callback', async (req, res) => {
    const code = req.query.code;
    const options = {
      code,
      redirect_uri: 'http://localhost:3000/oauth2callback', // Replace with your actual redirect URI
      code_verifier: req.query.code_verifier
    };
    try {
      // Exchange authorization code for tokens
      const result = await client.authorizationCode.getToken(options);
      const accessToken = client.accessToken.create(result);
      console.log('Access token:', accessToken.token);
      console.log('Refresh token:', accessToken.token.refresh_token);
      res.send('Authentication successful!');
    } catch (error) {
      console.error('Access Token Error:', error.message);
      res.send('Authentication failed.');
    }
  });
  //ending new code
// Function to send email
const sendEmail = async (formData) => {
    console.log('email',process.env.USER_EMAIL)
    const mailOptions = {
        from: `Your Name <${process.env.USER_EMAIL}>`,
        to: 'recipient@example.com',
        subject: 'Form Submission',
        text: `Form data: ${JSON.stringify(formData)}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};



// Send the email with the form data
module.exports=sendEmail;
