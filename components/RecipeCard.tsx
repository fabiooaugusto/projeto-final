import React from 'react'

const RecipeCard = () => {
	return (
		<button className="flex h-60 w-64 flex-col rounded-lg border border-white bg-white hover:border-orange-lightest hover:bg-orange-lightest focus:border-orange-lightest focus:bg-orange-lightest focus:outline-none">
			<img
				className="rounded-t-lg border border-b-gray-dark object-cover"
				src="/img/rice.jpg"
				alt="Imagem da Receita"
			/>
			<h2 className="p-2 text-2xl/7">Título</h2>
		</button>
	)
}

export default RecipeCard
