import React from 'react';
import ThemeToggle from '../../ThemeToggle';
import Nav from '../../layout/Nav';

const Header: React.FC = () => {
  return (
    <header className='flex items-center justify-between p-6 w-screen fixed top-0 z-50 bg-white dark:bg-dark shadow-custom'>
      <div className='text-xl font-bold flex flex-row items-center gap-2'>
        Darrell M <ThemeToggle />
      </div>

      <Nav />
    </header>
  );
};

export default Header;
