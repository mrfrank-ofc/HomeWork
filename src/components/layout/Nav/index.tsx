import React from 'react'
import { useMenuContext } from '../../../context/MenuContext'

const Nav: React.FC = () => {
  const { isMenuOpen, toggleMenu } = useMenuContext()

  const handleNavClick = (sectionId: string) => {
    // Fechar o menu, se estiver aberto em dispositivos móveis
    if (isMenuOpen) {
      toggleMenu();
    }
    // Rolar para a seção correspondente
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Botão para abrir o menu no mobile */}
      <button
        onClick={toggleMenu}
        className='text-xl md:hidden'
        aria-expanded={isMenuOpen ? 'true' : 'false'}
      >
        {/* Ícone do menu que muda para 'X' quando o menu está aberto */}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          className='w-8 h-8'
        >
          {isMenuOpen ? (
            // Ícone para fechar (X)
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          ) : (
            // Ícone do menu hamburger
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          )}
        </svg>
      </button>

      {/* Conteúdo do menu */}
      <div
        className={`fixed inset-0 md:static bg-light dark:bg-dark z-50 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} transition-transform duration-300 ease-in-out`}
      >
        <nav className='flex flex-col gap-y-10 md:flex-row items-center justify-center h-full md:h-auto font-heading bg-white dark:bg-dark'>
          {/* Usar handleNavClick para navegação suave e fechar o menu no mobile */}
          <button
            onClick={() => handleNavClick('home')}
            className='block py-2 px-6 md:py-0'
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className='block py-2 px-4 md:py-0'
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('projects')}
            className='block py-2 px-4 md:py-0'
          >
            Projects
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className='block py-2 px-4 md:py-0'
          >
            Contact
          </button>
        </nav>
      </div>
    </>
  )
}

export default Nav
