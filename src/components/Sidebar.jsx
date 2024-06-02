
import { Bars3Icon, PlusIcon, QuestionMarkCircleIcon, ArrowPathIcon, Cog6ToothIcon } from '@heroicons/react/16/solid'

import React, { useContext, useEffect, useRef, useState, } from 'react'
import { Context } from '../globalcontext/Contextapi';
import RecentPrompt from './RecentPrompt';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    const [expandMenu, setExpandMenu] = useState(false);
    const { recentPrompt } = useContext(Context);
    const menuref = useRef(null);
    const parentRef = useRef(null);
    function handelmenu() {
        setExpandMenu(!expandMenu)
    }

    function handleMenuClick(e) {
        if (parentRef.current &&
            !parentRef.current.contains(e.target) &&
            menuref.current &&
            !menuref.current.contains(e.target)) {
            setExpandMenu(false)
        }
    }



    useEffect(() => {
        if (expandMenu) {
            document.addEventListener('click', handleMenuClick);
        } else {
            document.removeEventListener('click', handleMenuClick);
        }
        return () => {
            document.removeEventListener('click', handleMenuClick);
        };
    }, [])

    return (
        <aside className={`${expandMenu ? 'w-40' : 'w-9 md:w-11'} min-h-screen bg-[#1e1f20] transition-width duration-100 ease-in flex flex-col justify-between py-6 fixed z-50 `}>
            <div className='flex flex-col gap-4' ref={parentRef}>


                <div className={`${expandMenu ? 'justify-start' : 'justify-center'} flex  p-2`}>
                    <button onClick={handelmenu} ref={menuref} title='Expand Menu' className={`border  border-[#1e1f20] transition-border duration-300 ease-in-out hover:border-white p-2 rounded-full`}> <Bars3Icon className='h-4 text-[#e8eaed]' /></button>
                </div>
                <div className={`${expandMenu ? 'justify-start border border-white/50 p-2 w-max bg-black' : 'justify-center'} flex  items-center  rounded-3xl hover:bg-black/25  `} >
                    <Link to='/'> <button onClick={handelmenu} title='New Chat' className={`${expandMenu ? "border-none" : "border"}  w-max border-[#1e1f20] transition-border duration-300 ease-in-out hover:border-white p-1 rounded-full flex bg-black items-center gap-2`}><PlusIcon className='h-4 text-[#e8eaed]' />
                        {expandMenu && <span className='text-white/65 text-xs text-left whitespace-nowrap'> New Chat</span>}</button></Link>

                </div>
                {/* recents */}
                {
                    expandMenu && <div className='text-white px-2 scrollbar justify-start  h-[20rem] overflow-y-scroll overflow-x-hidden '>
                        <h2 >Recents</h2>
                        {recentPrompt.map((prompt, index) => (
                            <RecentPrompt key={index} prompt={prompt} />
                        ))}



                    </div>
                }
            </div>


            <div className='my-4'>
                <div className='flex flex-col gap-2'>
                    <div className='flex'>
                        <button title='help' className={`border  border-[#1e1f20]  transition-border duration-300 flex items-center gap-4 ease-in-out hover:border-white p-2 rounded-full`}>
                            <QuestionMarkCircleIcon className='h-4 text-[#e8eaed]' />
                            {expandMenu && <span className='text-white'>Help</span>}
                        </button>
                    </div>


                    <div className='flex'>
                        <button title='Acitvity' className={`border  border-[#1e1f20]  transition-border duration-300 flex items-center gap-4 ease-in-out hover:border-white p-2 rounded-full`}>
                            <ArrowPathIcon className='h-4 text-[#e8eaed]' />
                            {expandMenu && <span className='text-white'>Activity</span>}
                        </button>
                    </div>

                    <div className='flex'>
                        <button title='settings' className={`border  border-[#1e1f20]  transition-border duration-300 flex items-center gap-4 ease-in-out hover:border-white p-2 rounded-full`}>
                            <Cog6ToothIcon className='h-4 text-[#e8eaed]' />
                            {expandMenu && <span className='text-white'>Settings</span>}
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
