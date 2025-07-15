import Image from 'next/image'

const Card = ({iconUrl, startText, boldtext, endText}) => {
    return(
        <div className="flex flex-col justify-between items-center bg-white rounded rounded-lg m-6 px-4 py-6" style={{width:'230px', height: '230px'}}>
            <Image className='h-1/2' src={iconUrl} height={90} width={90} alt="Card icon"/>
            <p className='h-1/2 text-center'>{startText} <span className='font-bold'> {boldtext} </span> {endText} </p>
        </div>
    )
}

export default Card