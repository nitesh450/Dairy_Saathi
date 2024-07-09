const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');
const axios = require('axios');
const mailchimpConfig = require('../config').mailchimp;
const mailchimp = require('@mailchimp/mailchimp_marketing');

const SECRET = '6Lfs9PYpAAAAAMF4jwX3r_oVjtVvVZIF8HyssIzd';

mailchimp.setConfig({
    apiKey: mailchimpConfig.apiKey,
    server: mailchimpConfig.serverPrefix,
});

router.post('/post', async (req, res) => {
    try {
        const { name, email, phoneNumber, company, message, howknow, additionalData, recaptchaValue } = req.body;
        console.log('Received data:', req.body);

        // Validate email address
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: 'Invalid email address' });
        }

        const response = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${SECRET}&response=${recaptchaValue}`);
        const data = response.data;

        console.log('Recaptcha verification data:', data);

        if (data.success) {
            const newContact = new Contact({ name, email, phoneNumber, company, message, howknow, additionalData, recaptchaValue });
            await newContact.save();

            const mailResponse = await mailchimp.lists.addListMember(mailchimpConfig.listId, {
                email_address: email,
                status: 'subscribed',
                merge_fields: {
                    FNAME: name.split(' ')[0],
                    LNAME: name.split(' ').slice(1).join(' '),
                    PHONE: phoneNumber,
                    COMPANY: company,
                    HOWKNOW: howknow,
                },
            });

            console.log('Mailchimp response:', mailResponse);

            res.status(200).json({ message: "Data Saved" });
        } else {
            res.status(400).json({ message: 'Recaptcha verification failed' });
        }
    } catch (error) {
        console.error('Error processing request:', error);

        const errorMessage = error.response && error.response.data ? error.response.data : error.message;
        res.status(400).json({ message: 'Error processing request', error: errorMessage });
    }
});

module.exports = router;