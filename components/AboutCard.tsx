import React from 'react'

const AboutCard = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center bg-orange-light text-brown-dark gap-3 p-3'>
      <div>
        <img className='w-36' src="/img/pessoas.png" alt="Foto da Pessoa" />
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Reprehenderit aut, impedit saepe dolore molestiae sunt aliquam
        earum at dolorem? Voluptatum impedit veniam laudantium voluptatem
        facere tempora quod officiis pariatur culpa deleniti sunt fuga
      </div>
    </div>
  )
}

export default AboutCard