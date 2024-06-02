
import { useContext, useEffect, useRef } from 'react'
import { Context } from '../globalcontext/Contextapi';
import { CameraIcon, PaperAirplaneIcon, PhotoIcon } from '@heroicons/react/24/solid'
import { HeartIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Search = () => {
    const { onsent, input, setInput } = useContext(Context);
    const [inputLength, setInputLength] = useState(false)
    const [checkInput, setCheckInput] = useState(false)
    const btnref = useRef(null)

    useEffect(() => {
        if (input.length > 20) {
            setInputLength(true)
        } else {
            setInputLength(false)
        }


        if (!input.length <= 0) {
            setCheckInput(true)
        } else {
            setCheckInput(false)
        }

    }, [input])

    const [heart, setHeart] = useState(false);

    function handleHeart() {
        setHeart(!heart);
    }


    function handleFetch() {
        onsent()
    }

    function handleKey(e) {
        if (e.key === 'Enter') {
            onsent()
            btnref.current.click();
        }
    }


    return (
        <footer className=' w-full fixed bottom-0 flex flex-col bg-black  items-center h-[10vh]  pl-10 z-40'>
            <div className={` ${inputLength ? 'flex-wrap' : 'flex-nowrap'} flex   md:w-[80%] bg-[#1a1b1c] rounded-xl`}>
                <input type="text" placeholder='Enter Your Prompt Here'
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => handleKey(e)}
                    value={input}
                    className={` ${inputLength ? 'w-full' : 'flex-1'} bg-[#1a1b1c]  whitespace-pre rounded-lg  outline-none text-white w-[80%] px-2 py-[6px]`} />
                <div className={` ${inputLength ? 'w-full' : 'w-auto'} flex justify-end  gap-2 `}>
                    <button><PhotoIcon className='h-5 text-[#e8eaed] active:text-green-500' /></button>
                    <button><CameraIcon className='h-5 text-[#e8eaed] active:text-green-500' /></button>
                    {checkInput &&
                        <button onClick={() => handleFetch()} ref={btnref}>
                            <Link to='/gemini'>
                                <PaperAirplaneIcon className='h-5 text-[#e8eaed] active:text-green-500' />
                            </Link>
                        </button>}
                </div>
            </div>
            <div>
                <h1 className='text-white inline-flex items-center gap-1'>Made with <HeartIcon onClick={() => handleHeart()} className={`${heart ? 'animate-pulse' : 'animate-none'} h-5 font-bold cursor-pointer text-red-500`} />  by Basheer ahamed.</h1>
            </div>
        </footer>
    )
}

export default Search
