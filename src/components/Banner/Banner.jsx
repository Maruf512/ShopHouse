import React from 'react'
import BannerImg from "../../assets/women/women2.jpg"
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import { GiFoodTruck } from 'react-icons/gi'


function Banner() {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
                {/* Image Section */}
                <div data-aos="zoom-in">
                    <img src={BannerImg} alt="" 
                    className='max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover'
                    />
                </div>
                {/* Details Section */}
                <div>
                    <h1 className='text-3xl sm:text-4xl font-bold'>Winter Sale upto 50% off</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, dolorem? Earum quidem ex ab quisquam ut, a repudiandae repellat?
                    </p>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Banner
