'use client'

import React from 'react'
import RecipeCard from '@/components/RecipeCard'

export default function Recipes({ children }: { children: React.ReactNode }) {
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
						<RecipeCard />
						<RecipeCard />
						<RecipeCard />
						<RecipeCard />
						<RecipeCard />
						<RecipeCard />
						<RecipeCard />
						<RecipeCard />
						<RecipeCard />
						<RecipeCard />
					</div>
				</div>
			</div>
		</main>
	)
}
