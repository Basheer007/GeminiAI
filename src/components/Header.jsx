import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"
const Header = () => {
    return (
        <header className='bg-black text-white flex justify-between items-center  py-10 px-2 md:px-20'>
            <div className='text-xl px-10 '>
                Gemini <span className='text-base font-nunito'>Clone</span>
            </div>
            <div title='User' className='h-7 w-7 flex cursor-pointer justify-center items-center rounded-full border-2'>
                <Link to='/'> <img src={logo} className='h-7 w-7  object-cover rounded-full object-center' /></Link>
            </div>
        </header>
    )
}

export default Header
