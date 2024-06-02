import React, { useContext } from 'react'

import { CpuChipIcon, CurrencyDollarIcon, LightBulbIcon } from '@heroicons/react/24/solid'
import { Context } from '../globalcontext/Contextapi';
import { useState } from 'react';


const Main = () => {
    const { onsent, input, setInput, showResult,
        setShowResult, generatedText, setGeneratedText,
        currentQuestion, setCurrentQuestion, } = useContext(Context);

    function handletodaysearch1() {
        setInput('what is Cookies in Browser')
    }
    function handletodaysearch2() {
        setInput('Break Down Quantum Physics')
    }
    function handletodaysearch3() {
        setInput('What is the income of Sundar pitchai')
    }
    function handletodaysearch4() {
        setInput('what is React Native')
    }



    return (
        <main className='w-full bg-black relative z-10 h-[80vh]'>
            <section className='container mx-auto pl-10 md:px-32 pt-10 '>

                <div className='flex flex-col gap-3'>
                    <h1 className='text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Hello, User</h1>
                    <h2 className='text-[#444746] text-3xl'>How can I help you today? </h2>
                </div>
                <div className='cssGrid my-10  w-full'>
                    <div onClick={() => handletodaysearch1()} className='bg-[#1a1b1c] rounded-xl cursor-pointer  hover:bg-slate-500/60 md:flex md:justify-center   relative p-3'>
                        <p className='text-white text-xs md:text-lg'> what is Cookies in Browser</p>
                        <LightBulbIcon className='h-3 md:h-7 text-[#e8eaed] absolute bottom-2 right-5' />
                    </div>
                    <div onClick={() => handletodaysearch2()} className='bg-[#1a1b1c]  cursor-pointer hover:bg-slate-500/60 relative md:flex md:justify-center rounded-xl p-3'>
                        <p className='text-white text-xs md:text-lg'>Break Down Quantum Physics</p>
                        <CpuChipIcon className='h-3 md:h-7 text-[#4eff37] absolute bottom-2 right-5' />
                    </div>
                    <div onClick={() => handletodaysearch3()} className='bg-[#1a1b1c] cursor-pointer hover:bg-slate-500/60 relative md:flex md:justify-center rounded-xl p-3'>
                        <p className='text-white text-xs md:text-lg'>What is the income of Sundar pitchai</p>
                        <CurrencyDollarIcon className='h-3 md:h-7 text-[#fafd33] absolute bottom-2 right-5' />
                    </div>
                    <div onClick={() => handletodaysearch4()} className='bg-[#1a1b1c] cursor-pointer hover:bg-slate-500/60 relativemd:flex md:justify-center  rounded-xl p-3'>
                        <p className='text-white text-xs md:text-lg'>what is React Native</p>
                        <LightBulbIcon className='h-3 md:h-7 text-[#f5df17] absolute bottom-2 right-5' />
                    </div>
                </div>



            </section>
        </main>
    )
}

export default Main
