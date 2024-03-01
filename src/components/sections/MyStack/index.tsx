import React from 'react'

import { useMenuContext } from '../../../context/MenuContext';

const MyStack: React.FC = () => {
  const { isMenuOpen } = useMenuContext();

  return (
    <section className={`${isMenuOpen ? 'hidden' : 'flex'} flex-col gap-7 items-center md:items-center text-center md:text-left p-20 md:justify-center`}>
      <h2 className='font-heading text-2xl font-bold gradient-text' >My tech Stack</h2>
      <p className='font-body'> Technologies I’ve been working with recently</p>
      <div className='grid  grid-rows-2 grid-cols-2 justify-center gap-6 mt-4  md:grid md:grid-rows-2 md:grid-cols-3 md:gap-8 z-0'>
    
        <img src='https://skillicons.dev/icons?i=js,ts' alt='JavaScript,TypeScript' className='transition duration-300 ease-in-out transform hover:scale-110 '/>
        <img
          src='https://skillicons.dev/icons?i=next,react'
          alt='Next, React'
          className='transition duration-300 ease-in-out transform hover:scale-110 '
        />

        <img
          src='https://skillicons.dev/icons?i=nodejs,mysql'
          alt='NodeJS, MySql'
          className='transition duration-300 ease-in-out transform hover:scale-110'
        />
        <img
          src='https://skillicons.dev/icons?i=tailwind,styledcomponents'
          alt='Tailwind, Styled-components'
          className='transition duration-300 ease-in-out transform hover:scale-110'
        />
 <img
          src='https://skillicons.dev/icons?i=git,github'
          alt='Git, GitHub'
          className='transition duration-300 ease-in-out transform hover:scale-110'
        />
         <img
          src='https://skillicons.dev/icons?i=html,css'
          alt='HTML5,CSS3'
          className='transition duration-300 ease-in-out transform hover:scale-110'
        />
      
      </div>
    </section>
  )
}

export default MyStack;
