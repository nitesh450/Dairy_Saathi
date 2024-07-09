

const axios = require('axios');
require('dotenv').config();

const aisensyAPIUrl = 'https://backend.aisensy.com/campaign/t1/api/v2';
const recipientPhoneNumber = process.env.RECIPIENT_PHONE_NUMBER;
const accessToken = process.env.AISENSY_ACCESS_TOKEN;

const sendWhatsAppMessage = async (message) => {
    try {
        const response = await axios.post(
            aisensyAPIUrl,
            {
                messaging_product: 'whatsapp',
                to: recipientPhoneNumber,
                text: { body: message }
            },
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        console.log('Message sent successfully:', response.data);
        return response.data; // Optionally return response data
    } catch (error) {
        console.error('Error sending message:', error.response ? error.response.data : error.message);
        throw new Error('Error sending WhatsApp message via AiSensy');
    }
};

module.exports = {
    sendWhatsAppMessage
};
