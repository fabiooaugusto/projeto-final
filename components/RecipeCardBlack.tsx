import React from 'react'
import Link from 'next/link'
import { Recipe } from '@/app/api/recipes'

interface RecipeCardProps {
	recipe: Recipe
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
	return (
		<Link
			href={`http://localhost:3000/recipes/${recipe.id}`}
			className="flex h-72 w-64 flex-col overflow-hidden rounded-lg border border-gray-dark bg-gray-dark hover:border-gray-light hover:bg-gray-light focus:border-gray-light focus:bg-gray-light focus:outline-none"
		>
			<img
				className="h-60 w-64 rounded-t-lg border-b border-gray-dark object-cover"
				src={recipe.imageUrl}
				alt="Imagem da Receita"
			/>
			<h2 className="p-2 text-2xl/7 text-white no-underline">{recipe.title}</h2>
		</Link>
	)
}

export default RecipeCard
