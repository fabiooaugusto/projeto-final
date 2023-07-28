import React from 'react'

const CategoryCard = () => {
  return (
    <button className='bg-gray-dark text-white w-72 h-40 md:w-48 md:h-28 rounded-md p-2 md:p-1 hover:scale-105 focus:scale-105 focus:outline-none transition-all'>

      <div className='flex flex-col border w-full h-full border-white rounded-md p-2 pt-1'>
        <h3 className='text-2xl md:text-xl'>
          titulo
        </h3>
        <div className='flex flex-row gap-1'>
          <div className='w-20' >
            <img src="/img/icon-basicas.png" alt="Ícone" />
          </div>
          <div className='text-lg md:text-sm'>
            Lorem ipsum dolor sit, amet consectetur
          </div>
        </div>
      </div>
    </button>
  )
}

export default CategoryCard