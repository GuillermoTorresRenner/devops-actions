import React from 'react'
import Image from 'next/image'
import classes from './flipCard1.module.css'

const FlipCard1 = ({bg_image, title, description}) => {

    return (
        
        <div className={classes.cardContainer}>
            <div className={classes.card}>
            
                <div className={classes.cardFront}>
                    <Image className='z-0 brightness-75' src={bg_image} alt='flip card photo' fill/>
                    <span className='absolute w-2/3 text-white text-h1 font-bold font-merryweather z-10 bottom-6 left-6'>{title}</span>
                </div>

                <div className={classes.cardBack}>                
                    <div className={classes.cardDescription}>
                        <Image className='absolute top-8 right-8' src='/images/logo_eltomillo_cards.svg' alt='flip card back logo' width={65} height={65}/>
                        <span className='text-primary text-button'>{description}</span>
                    </div>
                </div>

            </div>
        </div>
        
    )
}

export default FlipCard1
