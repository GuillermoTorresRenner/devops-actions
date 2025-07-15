import React from 'react'
import Image from 'next/image'
import classes from './flipCard2.module.css'

const FlipCard2 = ({bg_image, title, description}) => {

    return (
        
        <div className={classes.cardContainer}>
            <div className={classes.card}>
            
                <div className={classes.cardFront}>
                    <Image className='z-0 brightness-50' src={bg_image} alt='flip card photo' fill/>
                    <span className='w-2/3 text-white text-center text-subhead font-bold font-merryweather z-10 bottom-6 left-6 p-16'>{title}</span>
                </div>

                <div className={classes.cardBack}>                
                    <div className="">
                        <span className='block text-white text-center text-subhead font-merryweather mb-4'>{title}</span>
                        <span className='block text-white text-center text-button'>{description}</span>
                    </div>
                </div>

            </div>
        </div>
        
    )
}

export default FlipCard2
