import React from 'react'
import Menu from './Menu'

const Header = () => {
  return (
    <header className='px-24 w-full shadow-md flex justify-between items-center sticky top-0 bg-white z-10'>
      <a href='/' className="flex justify-center items-center gap-2">
        <img src="/Logo Halal Indonesia.png" alt="Halal Indonesia" className='h-9' />
        <img src="/Logo Yayasan Matahari Gorontalo.png" alt="Yayasan Matahari Gorontalo" className='h-9' />
        <div className="flex flex-col justify-center-items-start">
          <h1 className='text-purple-900 font-black'>RUSLAN SAMUEL</h1>
          <small className='text-purple-700 text-xs'>P3H Yayasan Matahari Gorontalo</small>
        </div>
      </a>
      <Menu />
    </header>
  )
}

export default Header
