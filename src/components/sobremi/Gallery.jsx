import React from 'react'
import Image from 'next/image'

const Gallery = ({img_1, img_2, img_3}) => {
    return (
        <div className="flex justify-between">
            <div className="relative w-1/3 overflow-hidden transition-all duration-300 hover:w-2/5">
                <Image className='w-full transform transition-transform duration-300 hover:scale-110' src={img_1} alt='Gallery image 1' width={500} height={500}/>
            </div>
            <div className="relative w-1/3 overflow-hidden transition-all duration-300 hover:w-2/5">
                <Image className='w-full transform transition-transform duration-300 hover:scale-110' src={img_2} alt='Gallery image 2'width={500} height={500}/>
            </div>
            <div className="relative w-1/3 overflow-hidden transition-all duration-300 hover:w-2/5">
                <Image className='w-full transform transition-transform duration-300 hover:scale-110' src={img_3} alt='Gallery image 3'width={500} height={500}/>
            </div>
        </div>
    )
}

export default Gallery
