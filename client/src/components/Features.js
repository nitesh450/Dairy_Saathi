import React from 'react'
import { FaMapLocationDot } from "react-icons/fa6";
import { SiGooglepay } from "react-icons/si";
import { MdOutlineContactPhone } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { HiMegaphone } from "react-icons/hi2";
import { GrCloudComputer } from "react-icons/gr";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { FcSalesPerformance } from "react-icons/fc";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import './Features.css'
function AboutUs() {
    return (
        <div id='AboutUs' className=' overflow-y-auto'>
            <section>
                <h1 className='text-3xl sm:text-5xl text-center my-5'>How does our App helps you?</h1>
                <div className='flex flex-row px-5'>
                    <div className='mx-auto w-[80%] text-justify h-auto flex flex-col flex-wrap FeaturesParent'>
                        <div className='mx-auto w-[100%] h-[auto] text-justify my-10 items-center'>
                            <div>
                                <h2 className='text-xl'>Live Location Tracking</h2>
                            </div>
                            <div>
                                <FaMapLocationDot className='text-3xl my-2' />
                            </div>

                        </div>
                        <div className='mx-auto w-[100%]  text-justify my-10 items-center'>
                            <div>
                                <h2 className='text-xl'>Online payment Transfer</h2>
                            </div>
                            <div>
                                <SiGooglepay className='text-3xl my-2 ' />
                            </div>

                        </div>
                        <div className='mx-auto w-[100%] text-justify my-10 items-center'>
                            <div>
                                <h2 className='text-xl'>
                                    Marketing of your Farms
                                </h2>
                            </div>
                            <div>
                                <HiMegaphone className='text-3xl my-2 ' />
                            </div>

                        </div>

                        <div className='mx-auto w-[100%] text-justify my-10 items-center'>
                            <div>
                                <h2 className='text-xl'>Monthly/Weekly revenue Report</h2>
                            </div>
                            <div>
                                <FcSalesPerformance className='text-3xl my-2 ' />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default AboutUs