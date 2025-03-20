import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image'

const Hero = () => {
    const handleScroll = () => {

    }

    return (
        <div className='flex justify-center'>
            <div className='p-6 space-y-3'>
                <h1 className='font-bold text-5xl'>
                    Find, book, or rent a car -- quickly and easily!
                </h1>
                <p className='text-xl'>
                    Streamline your car rental experience
                    with our effortless booking process.
                </p>
                <CustomButton
                    title='Explore Cars'
                    containerStyles='bg-blue-600 text-sm text-white rounded-full px-3 py-2'
                    handleClick={handleScroll}
                />
            </div>
            <div>
                <div>
                    <Image
                        src="/hero-bg.png"
                        alt="hero background"
                        fill
                        className="object-contain transform translate-x-50"
                    />
                    <Image
                        src="/hero.png"
                        alt="hero"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero