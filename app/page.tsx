import React from 'react'
import RecipeCardBlack from '@/components/RecipeCardBlack'
import AboutCard from '@/components/AboutCard'
import { Recipe } from './api/recipes'
import CarouselComponent from '@/components/CarouselComponent'

async function getRecipes(): Promise<Recipe[]> {
	const res = await fetch('http://localhost:3000/api/recipes')

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

export default async function Home() {
	const recipes = await getRecipes()

	return (
		<main>
			<section className="items-center bg-cover bg-center bg-no-repeat">
				<CarouselComponent />
			</section>
			<section className="flex items-center justify-center bg-white px-3 py-16 align-middle md:px-0">
				<div className="flex max-w-5xl flex-wrap items-center justify-center gap-8 align-middle ">
					{recipes.slice(0, 10).map((recipe) => {
						return <RecipeCardBlack recipe={recipe} />
					})}
				</div>
			</section>

			<section className="flex flex-col items-center justify-center gap-8 bg-gray-dark pb-16 pt-6 text-white">
				<h1 className="flex w-full items-center justify-between pl-5 text-3xl lg:max-w-4xl lg:pl-0">
					Quem Somos
				</h1>
				<div className="flex flex-col items-center justify-center">
					<div className="flex flex-col gap-5 px-14 lg:w-full lg:max-w-4xl lg:px-0">
						<AboutCard
							imgUrl="/img/sobrenos1.png"
							text="Seu guia culinário, o Chef Lucas Oliveira, traz uma vasta experiência gastronômica de diversas culturas ao redor do mundo. Com um olhar inovador, ele transforma ingredientes simples em pratos extraordinários. Suas receitas são criativas, repletas de sabores únicos e detalhes que tornam cada refeição uma experiência memorável. Acompanhe suas dicas de preparo e técnicas para se tornar um verdadeiro mestre na cozinha."
						/>
						<AboutCard
							imgUrl="/img/sobrenos2.png"
							text="O bem-estar é a prioridade da Nutricionista Sofia Almeida. Com formação acadêmica sólida e paixão pela alimentação saudável, ela garante que nossas receitas sejam nutritivas e balanceadas, sem abrir mão do sabor. Sempre atenta às necessidades alimentares, ela oferece conselhos e informações valiosas para ajudar você a fazer escolhas mais conscientes e saudáveis na sua jornada culinária."
						/>
						<AboutCard
							imgUrl="/img/sobrenos3.png"
							text="O aroma dos pães recém-assados enche nossos corações de alegria, e o Padeiro Gabriel Santos é o responsável por essa magia. Com suas habilidades artesanais, ele apresenta receitas de pães, bolos e massas que vão além do sabor tradicional. Suas criações são uma mistura de tradição e inovação, perfeitas para aqueles que apreciam um toque de amor na culinária."
						/>
						<AboutCard
							imgUrl="/img/sobrenos4.png"
							text="Um mundo de doces delícias é desvendado pela Confeiteira Isabella Ferreira. Com suas mãos habilidosas e um talento nato para a confeitaria, ela cria sobremesas deslumbrantes que encantam a todos. Desde bolos decorados até sobremesas elegantes, suas receitas são inspiradas e fáceis de seguir, permitindo que qualquer pessoa descubra o prazer de preparar doces especiais em casa."
						/>
					</div>
				</div>
			</section>
		</main>
	)
}
