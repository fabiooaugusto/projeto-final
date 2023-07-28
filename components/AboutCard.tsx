import React from 'react'

const AboutCard = () => {
	return (
		<div className="flex flex-col items-center justify-center gap-3 bg-orange-light p-3 text-brown-dark md:flex-row">
			<div>
				<img className="w-36" src="/img/pessoas.png" alt="Foto da Pessoa" />
			</div>
			<div>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
				aut, impedit saepe dolore molestiae sunt aliquam earum at dolorem?
				Voluptatum impedit veniam laudantium voluptatem facere tempora quod
				officiis pariatur culpa deleniti sunt fuga
			</div>
		</div>
	)
}

export default AboutCard
