import React from 'react'
import Image1 from "../../assets/hero/women.png"
import Image2 from "../../assets/hero/shopping.png"
import Image3 from "../../assets/hero/sale.png"

const ImageList = [
    {
        id: 1,
        img: Image1,
        title: "Upto 50% off on all Men's Wear",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, nisi. Eligendi adipisci autem nostrum saepe nemo dolores rerum illum alias atque reprehenderit itaque voluptatum odit vel tempore corrupti, quo quis!",
    },
    {
        id: 2,
        img: Image2,
        title: "30% off on all Women's Wear",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos explicabo molestias placeat et, commodi ducimus ad, quibusdam ipsum optio consectetur, voluptatum adipisci aut recusandae quae itaque. Nam molestias repudiandae magnam!",
    },
    {
        id: 3,
        img: Image3,
        title: "70% off on all Products Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eos vero similique quod totam, error sit unde nobis rem dolores vel veniam quibusdam quas excepturi magnam voluptate aut, quisquam aliquam.",
    },
];


function Hero() {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
        {/* background pattern */}
        <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'>

        </div>
        {/* hero section */}
        <div className='container pb-8 sm:pb-0'>
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                    {/* text content Section */}
                    <div>
                        <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>Lorem ipsum dolor sit.</h1>
                        <p className='text-sm'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptate.
                        </p>
                        <div>
                            <button className='bg-gradient-to-r from-primary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>Order Now</button>
                        </div>
                    </div>
                    {/* Image Section */}
                    <div>
                        <div>
                            <img src={Image1} alt=""
                            className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
