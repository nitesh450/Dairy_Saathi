const express = require('express');
const bodyParser = require('body-parser');
const { sendWhatsAppMessage } = require('./aisensyIntegration'); // Adjust path as per your folder structure
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    let resData = {
        status: true,
        message: 'Hello Everyone! This API is working...'
    };
    return res.status(200).json(resData);
});

app.get('/sendMessage', async (req, res) => {
    let resData = {
        status: false,
        answare: ''
    };
    try {
        const whatsappMessage = 'Your WhatsApp message here'; // Customize your WhatsApp message
        const response = await sendWhatsAppMessage(whatsappMessage);
        resData.status = true;
        resData.respondData = response;
        return res.status(200).json(resData);
    } catch (error) {
        console.error('Error:', error);
        resData.answare = error.message || 'Error sending WhatsApp message';
        return res.status(500).json(resData);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
