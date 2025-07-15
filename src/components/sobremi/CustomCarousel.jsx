'use client'

import React from 'react'
import Image from 'next/image'
import { Carousel } from 'flowbite-react'

const CustomCarousel = () => {
    
    return (
        <div style={{height: '660px'}}>
            <Carousel
                slide={true}
                slideInterval={2500}
                className='relative h-140 overflow-hidden rounded-2xl'
            >
                <div className='relative'>
                    <Image
                        src="/images/inicio/inicio_galeria_img1.png"
                        alt="..."
                        width={1500} height={600} style={{minWidth: '600px'}}
						className='relative rounded rounded-2xl'
                    />
                </div>

                <div>
                    <Image
                        src="/images/inicio/inicio_galeria_img2.png"
                        alt="..."
                        width={1500} height={600} style={{minWidth: '600px'}}
                    />
                </div>

                <div>
                    <Image
                        src="/images/inicio/inicio_galeria_img3.png"
                        alt="..."
                        width={1500} height={600} style={{minWidth: '600px'}}
                    />
                </div>

                <div>
                    <Image
                        src="/images/inicio/inicio_galeria_img4.png"
                        alt="..."
                        width={1500} height={600} style={{minWidth: '600px'}}
                    />
                </div>

                <div>
                    <Image
                        src="/images/inicio/inicio_galeria_img5.png"
                        alt="..."
                        width={1500} height={600} style={{minWidth: '600px'}}
                    />
                </div>

				<div>
                    <Image
                        src="/images/inicio/inicio_galeria_img6.png"
                        alt="..."
                        width={1500} height={600} style={{minWidth: '600px'}}
                    />
                </div>

				<div>
                    <Image
                        src="/images/inicio/inicio_galeria_img7.png"
                        alt="..."
                        width={1500} height={600} style={{minWidth: '600px'}}
                    />
                </div>

				<div>
                    <Image
                        src="/images/inicio/inicio_galeria_img8.png"
                        alt="..."
                        width={1500} height={600} style={{minWidth: '600px'}}
                    />
                </div>

				<div>
                    <Image
                        src="/images/inicio/inicio_galeria_img9.png"
                        alt="..."
                        width={1500} height={600} style={{minWidth: '600px'}}
                    />
                </div>
            </Carousel>
        </div>
    )
}

export default CustomCarousel