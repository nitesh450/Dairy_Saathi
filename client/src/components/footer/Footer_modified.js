import React from "react";

const FooterModified = () => {
  return (
    <div>
      <footer className="dark:bg-gray-700 flex flex-col">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="flex flex-col lg:flex-row lg:justify-between">
            {/* First div: Text and Contact Information */}
            <div className="w-full lg:w-9/20 mb-6 lg:mb-0 text-center lg:text-left">
              <h1 className="self-center text-3xl font-semibold whitespace-nowrap">
                Dairy Saathi
              </h1>
              <p>A product by Grand Dairy Tech ®</p>
              <div className="font-semibold py-3">
                <p>Office:-</p>
                <p>Step Venture Lab, TIET, Patiala</p>
                <p>+91 623 905 2539, +91 6263 331 936</p>
                <p>Email: granddairytech@gmail.com</p>
              </div>
            </div>
            {/* Second div: Follow Us and Legal */}
            <div className="w-full lg:w-11/20 flex flex-col sm:flex-row sm:justify-between">
              <div className="w-full sm:w-1/2 text-center lg:text-left mb-6 sm:mb-0">
                <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase">
                  Follow Us
                </h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-3">
                    <a href="#" className="hover:underline">
                      Facebook
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className="hover:underline">
                      Instagram
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className="hover:underline">
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full sm:w-1/2 text-center lg:text-center mb-6 lg:mb-0">
                <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase">
                  Legal
                </h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterModified;
