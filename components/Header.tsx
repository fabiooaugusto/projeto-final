import React from 'react'

const Header = () => {
  return (
    <header className='flex items-center justify-center h-24 bg-orange-light drop-shadow-md'>
      <div className='px-3 flex items-center justify-between w-full max-w-5xl'>
        <div className='flex flex-row'>
          <button className='inline md:hidden'><img className='w-7' src="/img/menu.png" alt="Ícone do menu" /></button>
          <div className='px-3'><img className='w-64' src="/img/Logo.png" alt="Logo do site" /></div>
        </div>
        <div>
          <button className='text-2xl hidden md:inline hover:underline focus:underline'>Encontrar Receitas</button>
        </div>
      </div>
    </header>
  )
}

export default Header