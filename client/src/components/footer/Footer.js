import React from 'react';

const Footer_modified = () => {
  return (
    <div>
        <footer className='dark:bg-gray-700'>
            <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
                <div className='md:flex md:justify-between'>
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <h1 className='self-center text-3xl font-semibold whitespace-nowrap'>Dairy Saathi</h1>
                        <p>A product by Grand Dairy Tech ®</p>
                        <div className='font-semibold py-3'>
                            <p>Office:-</p>
                            <p>Step Venture Lab, TIET, Patiala</p>
                            <p>+91 623 905 2539, +91 6263 331 936</p>
                            <p>Email: granddairytech@gmail.com</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-3 text-center md:text-left'>
                        <div>
                            <h2 className='mb-6 text-lg font-semibold text-gray-900 uppercase'>
                                Follow Us
                            </h2>
                            <ul className='text-gray-500 font-medium'>
                                <li className='mb-3'>
                                    <a href='' className='hover:underline'>Facebook</a>
                                </li>
                                <li className='mb-3'>
                                    <a href='' className='hover:underline'>Instagram</a>
                                </li>
                                <li className='mb-3'>
                                    <a href='' className='hover:underline'>Twitter</a>
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

export default Footer_modified;
