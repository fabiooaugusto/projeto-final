import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col justify-center items-center h-28 bg-orange-light px-3 gap-2'>
      <div className='flex flex-row items-center justify-between w-full max-w-5xl'>
        <div className='flex flex-row gap-2'>
          <div><img className='w-5' src="/img/icon-contato.png" alt="" /></div>
          <div className='flex flex-col'>
            <span>(35) 91234-5678</span>
            <span>byronreceitas@ymail.com</span>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-2'>
          <img className='w-5' src="/img/icon-instagram.png" alt="" />
          <img className='w-5' src="/img/icon-youtube.png" alt="" />
          <img className='w-5' src="/img/icon-facebook.png" alt="" />
          <img className='w-5' src="/img/icon-twitter.png" alt="" />
        </div>
      </div>
      <div>
        <span className='flex'>Desenvolvido por <img className='px-1 h-5' src="/img/Logo-bsol.png" alt="Logo da byron.solutions" /></span>
      </div>
    </footer>
  )
}

export default Footer