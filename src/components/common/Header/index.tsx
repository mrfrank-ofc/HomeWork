const Header = () => {
  const handleMenuClick = () => {
    console.log("Button Clicked!");
    
  }
  return (
    <>
<div className="shadow-custom ">

    <header className='flex items-center shadow-custom justify-between p-6 fixed w-screen'>


      <div className='text-xl font-bold '>Joaomsdev</div>
      <button onClick={handleMenuClick} className='text-xl'>
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
            d='M4 6h16M4 12h16m-7 6h8'
          />
        </svg>
      </button>
    </header>
    </div>
    </>

  )
}

export default Header
