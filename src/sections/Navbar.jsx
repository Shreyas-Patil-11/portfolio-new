import { useState } from 'react'
// import menu from '../../public/assets/menu.svg'
// import close from '../../public/assets/close.svg'
import { navLinks } from '../constants/index.js'
import '../index.css'

const NavItems = ({ onClick = () => {} }) => (
    <ul className="nav-ul">
      {navLinks.map((item) => (
        <li key={item.id} className="nav-li">
          <a href={item.href} className="nav-li_a" onClick={onClick}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
  
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen((prevIsOpen) => {
            return !prevIsOpen
        });
    }

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-black/90'>
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center py-5 mx-auto sm:px-10 px-5">
                <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors flex gap-1 justify-center items-center">
                    <img src="./assets/logo.png"  className="w-10 h-10" alt="logo" />
                    Shreyas
                </a>

                <button onClick={toggleMenu}
                    className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex cursor-pointer' 
                    aria-label='Toggle Close'
                >
                    <img src={isOpen ? '/assets/close.svg' : '/assets/menu.svg'} alt ="toggle" className="w-6 h-6"></img>
                </button>
                
                <nav className='sm:flex hidden'>
                    <NavItems />
                </nav>
            </div>
        </div>
       
       <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
            <nav className='p-5'>
                <NavItems />
            </nav>
       </div>
    </header>
  )
}

export default Navbar