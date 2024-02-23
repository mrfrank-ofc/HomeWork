import React  from 'react'
import { useMenuContext } from '../../../context/MenuContext'

const Nav: React.FC = () => {
  const { isMenuOpen, toggleMenu } = useMenuContext();


 

  return (
    <>
      <button onClick={ toggleMenu} className='text-xl md:hidden ' aria-expanded={isMenuOpen}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          className='w-8 h-8'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16m-7 6h7'
          />
        </svg>
      </button>
      <div
        className={`fixed inset-0 md:static bg-light dark:bg-dark z-50 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} transition-transform duration-300 ease-in-out`}
      >
        <div className='flex justify-end p-4 md:hidden'>
          <button onClick={toggleMenu}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='w-8 h-8'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>
        <nav className='flex flex-col gap-y-10 md:flex-row items-center justify-center h-full md:h-auto font-heading  bg-white dark:bg-dark '>
          <a
            href='#home'
            onClick={toggleMenu}
            className='block py-2 px-6 md:py-0 t'
          >
            Home
          </a>
          <a
            href='#about'
            onClick={toggleMenu}
            className='block py-2 px-4 md:py-0'
          >
            About
          </a>
          <a
            href='#projects'
            onClick={toggleMenu}
            className='block py-2 px-4 md:
'
          >
            Projects
          </a>
          <a
            href='#contact'
            onClick={toggleMenu}
            className='block py-2 px-4 md:py-0'
          >
            Contact
          </a>
        </nav>
      </div>
      
    </>
  )
}
export default Nav
