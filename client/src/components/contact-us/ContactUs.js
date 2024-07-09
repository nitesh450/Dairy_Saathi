import React, { useRef, useState } from "react";
import pic_6 from "../../assets/pic_6.jpg";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    company: "",
    message: "",
    howknow: "",
    additionalData: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [recaptchaExpired, setRecaptchaExpired] = useState(false);
  const [additionalText, setAdditionalText] = useState(false);
  const recaptchaRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const specify = () => {
    setAdditionalText(true);
  };

  const onChange = (value) => {
    console.log("Captcha value:", value);
    setRecaptchaExpired(false);
  };

  const onExpired = () => {
    console.log("Captcha expired");
    setRecaptchaExpired(true); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAdditionalText(false);
    const recaptchaToken = recaptchaRef.current.getValue();
    if (!recaptchaToken) {
      alert("Please complete the ReCAPTCHA");
      return;
    }

    const dataToSend = {
      ...formData,
      recaptchaValue: recaptchaToken,
    };

    console.log("Form submitted:", dataToSend);

    try {
      const res = await axios.post("http://localhost:1000/api/v1/post", dataToSend);
      console.log("Response of resetting:", res);
      setShowPopup(true);
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        company: "",
        message: "",
        howknow: "",
        additionalData: "",
      });
      recaptchaRef.current.reset();
    } catch (error) {
      console.error("Error submitting the form", error);
      alert("There was an error submitting the form. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center lg:m-[2rem] bg-gray-100 p-4">
      <h2 className="text-3xl font-bold underline mb-6">Contact Us</h2>
      <div className="flex flex-row justify-center items-start w-full max-w-4xl">
        <img
          src={pic_6}
          className="w-1/2 rounded-lg shadow-md mr-4 hidden md:block"
          alt="Contact"
        />
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md w-1/2 min-w-[350px]"
        >
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number:
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company/Brand:
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              How did you discover Dairy Saathi:
            </label>
            <div>
              <label>
                <input
                  type="radio"
                  name="howknow"
                  value="Search engines (google, yahoo etc.)"
                  onClick={specify}
                  onChange={handleChange}
                />
                Search engines (google, yahoo etc.)
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="howknow"
                  value="Recommended by friend or colleague"
                  onClick={specify}
                  onChange={handleChange}
                />
                Recommended by friend or colleague
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="howknow"
                  value="Social media"
                  onClick={specify}
                  onChange={handleChange}
                />
                Social media
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="howknow"
                  value="others"
                  onClick={specify}
                  onChange={handleChange}
                />
                Others
              </label>
            </div>
          </div>
          {additionalText && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Additional Details:
              </label>
              <textarea
                name="additionalData"
                value={formData.additionalData}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Message Here:
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <ReCAPTCHA
            sitekey="6Lfs9PYpAAAAANKdR4DeK_US_hZSv9aVFr49uGbA"
            onChange={onChange}
            onExpired={onExpired}
            ref={recaptchaRef}
          />
          {recaptchaExpired && (
            <div className="text-red-500 text-sm mt-2">
              ReCAPTCHA expired. Please complete it again.
            </div>
          )}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
      {showPopup && (
        <div className="mt-4 p-4 bg-green-200 rounded-md text-center">
          <h2 className="text-xl font-semibold">
            Thank you for submitting the form!
          </h2>
          <h3 className="text-lg">We will contact you soon!</h3>
        </div>
      )}
    </div>
  );
}

export default ContactUs;
