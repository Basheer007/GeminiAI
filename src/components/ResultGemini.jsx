import React from 'react'
import { useContext, useEffect } from 'react'
import logo from "../assets/logo.png"
import DOMPurify from 'dompurify';
import glitter from "../assets/glitter.png"
import { Context } from '../globalcontext/Contextapi';
import TypingAnimation from './TypingAnimation ';
const ResultGemini = () => {
    const { generatedText, currentQuestion, loading, onsent } = useContext(Context);
    const sanitizedHtml = DOMPurify.sanitize(generatedText);
    return (
        <>
            <div className=' pl-8  md:p-20  flex flex-col bg-black h-dvh overflow-scroll scrollbar gap-4 '>
                <header>
                    <div className='flex gap-2 '>
                        <div className='w-10 h-10 rounded-full'>
                            <img src={logo} className='rounded-full h-10' />

                        </div>
                        <div className='text-white self-center flex-1'> {currentQuestion} </div>
                    </div>
                </header>
                {/* result from gemini */}
                <div >
                    {
                        loading ?

                            <div className='flex gap-1 pl-5'>
                                <div className='w-5 md:w-10 md:h-10 h-5'>
                                    <img src={glitter} alt="" className='h-5' />
                                </div>
                                <div className='flex flex-col w-full  gap-3'>
                                    <hr className='border-none bg-custom-gradient loader rounded-[4px] h-5' />
                                    <hr className='border-none bg-custom-gradient loader rounded-[4px] h-5' />
                                    <hr className='border-none bg-custom-gradient loader rounded-[4px] h-5' />
                                </div>
                            </div>

                            : <div style={{ scrollPadding: '10rem' }} className='flex gap-1    overflow-y-auto '>
                                <div className='min-w-5 md:min-w-10 md:min-h-10  min-h-5 '>
                                    <img src={glitter} alt="" className='h-5 md:h-10 ' />
                                </div>
                                <TypingAnimation text={sanitizedHtml} />
                            </div>

                    }
                </div>

            </div>


        </>
    )
}

export default ResultGemini
