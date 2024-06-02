import React from 'react'
import { ChatBubbleLeftIcon, EllipsisVerticalIcon, TrashIcon, PaperClipIcon, ArrowPathIcon, Cog6ToothIcon } from '@heroicons/react/16/solid'
import { PencilIcon } from '@heroicons/react/24/outline';
import { useRef, useState, useEffect } from 'react'
const RecentPrompt = ({ prompt }) => {
    const [showOptions, setShowoptions] = useState(false)

    const optionRef = useRef(null);
    function handleoptions(e) {
        if (optionRef.current && !optionRef.current.contains(e.target)) {
            setShowoptions(false)
        }
    }

    useEffect(() => {
        if (showOptions) {
            document.addEventListener('click', handleoptions);
        } else {
            document.removeEventListener('click', handleoptions);
        }


        return () => {
            document.removeEventListener('click', handleoptions);
        };
    }, [showOptions])


    return (
        <div className='my-2  p-2 flex justify-between border border-[#1e1f20] rounded-xl group hover:border hover:border-white w-full hover:bg-black relative'  >
            <button className='flex items-center gap-1'>
                <ChatBubbleLeftIcon className='h-4 text-[#e8eaed]' />
                <span className='text-xs whitespace-nowrap'>{prompt.length > 10 ? prompt.slice(0, 20) : prompt}</span>
            </button>
            <button title='options' ref={optionRef} onClick={() => setShowoptions(!showOptions)} className='invisible group-hover:visible  '>
                <EllipsisVerticalIcon className='h-4 text-[#e8eaed]' />
            </button>

            {
                showOptions && (
                    <div className='bg-black text-white absolute top-0 -right-[60%] rounded-xl flex flex-col'>
                        <button className='flex px-2 py-2 items-center gap-1 hover:bg-[#1e1f20]  rounded-xl'>
                            <PaperClipIcon className='h-3 text-[#e8eaed]' />
                            <span className='text-xs'>Pin</span>
                        </button>
                        <button className='flex px-2 py-2 items-center gap-1 hover:bg-[#1e1f20] rounded-xl'>
                            <PencilIcon className='h-3 text-[#e8eaed]' />
                            <span className='text-xs'>Rename</span>
                        </button>
                        <button className='flex px-2 py-2 items-center gap-1 hover:bg-[#1e1f20] rounded-xl'>
                            <TrashIcon className='h-3 text-[#e8eaed]' />
                            <span className='text-xs'>Delete</span>
                        </button>
                    </div>
                )
            }
        </div>
    )
}

export default RecentPrompt
