import React from 'react'
import RecipeCard from '@/components/RecipeCard'
import { Recipe } from '../api/recipes'

async function getRecipes(): Promise<Recipe[]> {
	const res = await fetch('http://localhost:3000/api/recipes')

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

export default async function Recipes() {
	const recipes = await getRecipes()

	return (
		<main>
			<div className="justify-center md:flex md:px-4 md:py-20">
				<div className="flex max-w-4xl flex-col gap-6 bg-gray-dark p-4 pb-12 md:rounded-lg">
					<div className="flex flex-row items-center gap-2">
						<img
							className="h-10"
							src="/img/icon-livro.png"
							alt="Ícone de um livro de receitas"
						/>
						<h1 className="text-extrabold text-3xl text-white">
							Livro de Receitas
						</h1>
					</div>
					<div className="flex flex-wrap justify-evenly gap-y-6">
						{recipes.map((recipe) => {
							return <RecipeCard recipe={recipe} />
						})}
					</div>
				</div>
			</div>
		</main>
	)
}
