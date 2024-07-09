 const mongoose=require('mongoose');

 const contact = new mongoose.Schema({
    name:{
        type:"String",
        required:true,
    },
    email:{
        type:"String",
        required:false,
    },
    phoneNumber:{
        type:'Number',
        required: true,
    },
    company:{
        type:"String",
        required: false,
    },
    message:{
        type:"String",
        required:false,
    },
    howknow: {
        type: String,
        enum: [
          'Search engines (google, yahoo etc.)',
          'Recommended by friend or colleague',
          'Social media',
          'Others'
        ],
        required: true,
      },
      additionalData: {
        type: String,
        default: "",
      },
      recaptchaValue: {
        type: String,
        required: true,
      },
    /**TODO 
     * How did the client heard about the company/app
     */
 })

 module.exports = mongoose.model("contact",contact);