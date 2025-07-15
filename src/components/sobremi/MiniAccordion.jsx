'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const MiniAccordion = () => {

    const [ item1Active, setItem1Active ] = useState(false)
    const [ item2Active, setItem2Active ] = useState(false)

    const toggleItem1 = () => {
        setItem1Active(!item1Active)
        if(item2Active) {
            setItem2Active(false)
        }        
    }

    const toggleItem2 = () => {
        setItem2Active(!item2Active)
        if(item1Active) {
            setItem1Active(false)
        }
    }

    return (
        <div className="flex justify-center items-center text-white py-3">
            <div id="accordion" className="rounded rounded-lg overflow-hidden flex flex-col gap-[1px]" >
                <div className={item1Active ? 'item active' : 'item'}>
                    <div className="header p-2 font-bold flex gap-4">
                        <Image className="activeIcon" src="/images/sobremi/white_arrow_up.svg" alt="white arrow" width={20} height={20} />
                        <Image className="inactiveIcon" src="/images/sobremi/white_arrow_down.svg" alt="white arrow" width={20} height={20} />
                        <button onClick={()=>toggleItem1()}>
                            Perspectiva ambiental.
                        </button>
                    </div>

                    <div className="content text-xl transition-all ease-in-out duration-1000">
                        <p className="mb-2">
                            Nos enfocamos en reciclar residuos para crear
                            recursos valiosos como compost, nuevas plantas, y
                            macetas, entre otros productos, siempre con un
                            fuerte compromiso con el cuidado de la naturaleza.
                        </p>
                    </div>
                </div>

                <div className={item2Active ? 'item active' : 'item'}>
                    <div className="header p-2 font-bold flex gap-4">
                    <Image className="activeIcon" src="/images/sobremi/white_arrow_up.svg" alt="white arrow" width={20} height={20} />
                        <Image className="inactiveIcon" src="/images/sobremi/white_arrow_down.svg" alt="white arrow" width={20} height={20} />
                        <button onClick={()=>toggleItem2()}>
                            Perspectiva social.
                        </button>                        
                    </div>

                    <div className="content text-xl transition-all ease-in-out duration-1000">
                        <p className="mb-2">
                            Damos la bienvenida a emprenderoras afines que
                            desean compartir sus talentos en un intercambio
                            colaborativo que no se limita al dinero, promoviendo
                            así una economía más humana y orientada al bien
                            común.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiniAccordion
