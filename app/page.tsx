'use client'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Carousel from 'react-bootstrap/Carousel'
import CategoryCard from '@/components/CategoryCard'
import AboutCard from '@/components/AboutCard'

export default function Home() {
	return (
		<main>
			<section className="items-center bg-cover bg-center bg-no-repeat">
				<Carousel fade>
					<Carousel.Item interval={5000}>
						<img
							className="d-block h-[300px] md:h-auto"
							src="/img/chicken.jpg"
							alt="Image One"
						/>
						<Carousel.Caption>
							<div className="hidden h-[300px] items-center justify-center md:flex">
								<div className="flex w-full max-w-5xl items-center justify-between px-8">
									<div className="flex h-40 w-72 flex-col gap-2 rounded bg-orange-lightest p-3 text-brown-dark drop-shadow-lg">
										<h1 className="text-2xl font-bold">Bem-Vindo!</h1>
										<div className="text-base font-medium">
											Aqui na byron.receitas, você pode encontrar seu novo prato
											favorito!
										</div>
										<div className="flex justify-center py-1">
											<button className="rounded-lg bg-brown-light p-1 px-3 text-base text-white drop-shadow-md transition-all hover:scale-105 focus:scale-105 focus:outline-none">
												Encontrar Receitas
											</button>
										</div>
									</div>
								</div>
							</div>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item interval={5000}>
						<img
							className="d-block h-[300px] md:h-auto"
							src="/img/penne.jpg"
							alt="Image One"
						/>
						<Carousel.Caption>
							<div className="hidden h-[300px] items-center justify-center md:flex">
								<div className="flex w-full max-w-5xl items-center justify-between px-8">
									<div className="flex h-40 w-72 flex-col gap-2 rounded bg-orange-lightest p-3 text-brown-dark drop-shadow-lg">
										<h1 className="text-2xl font-bold">Bem-Vindo!</h1>
										<div className="text-base font-medium">
											Aqui na byron.receitas, você pode encontrar seu novo prato
											favorito!
										</div>
										<div className="flex justify-center py-1">
											<button className="rounded-lg bg-brown-light p-1 px-3 text-base text-white drop-shadow-md transition-all hover:scale-105 focus:scale-105 focus:outline-none">
												Encontrar Receitas
											</button>
										</div>
									</div>
								</div>
							</div>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item interval={5000}>
						<img
							className="d-block h-[300px] md:h-auto"
							src="/img/fried-potatos.jpg"
							alt="Image One"
						/>
						<Carousel.Caption>
							<div className="hidden h-[300px] items-center justify-center md:flex">
								<div className="flex w-full max-w-5xl items-center justify-between px-8">
									<div className="flex h-40 w-72 flex-col gap-2 rounded bg-orange-lightest p-3 text-brown-dark drop-shadow-lg">
										<h1 className="text-2xl font-bold">Bem-Vindo!</h1>
										<div className="text-base font-medium">
											Aqui na byron.receitas, você pode encontrar seu novo prato
											favorito!
										</div>
										<div className="flex justify-center py-1">
											<button className="rounded-lg bg-brown-light p-1 px-3 text-base text-white drop-shadow-md transition-all hover:scale-105 focus:scale-105 focus:outline-none">
												Encontrar Receitas
											</button>
										</div>
									</div>
								</div>
							</div>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item interval={5000}>
						<img
							className="d-block h-[300px] md:h-auto"
							src="/img/pork-steak.jpg"
							alt="Image Two"
						/>
						<Carousel.Caption>
							<div className="hidden h-[300px] items-center justify-center md:flex">
								<div className="flex w-full max-w-5xl items-center justify-between px-8">
									<div className="flex h-40 w-72 flex-col gap-2 rounded bg-orange-lightest p-3 text-brown-dark drop-shadow-lg">
										<h1 className="text-2xl font-bold">Bem-Vindo!</h1>
										<div className="text-base font-medium">
											Aqui na byron.receitas, você pode encontrar seu novo prato
											favorito!
										</div>
										<div className="flex justify-center py-1">
											<button className="rounded-lg bg-brown-light p-1 px-3 text-base text-white drop-shadow-md transition-all hover:scale-105 focus:scale-105 focus:outline-none">
												Encontrar Receitas
											</button>
										</div>
									</div>
								</div>
							</div>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item interval={5000}>
						<img
							className="d-block h-[300px] md:h-auto"
							src="/img/sushi.jpg"
							alt="Image Two"
						/>
						<Carousel.Caption>
							<div className="hidden h-[300px] items-center justify-center md:flex">
								<div className="flex w-full max-w-5xl items-center justify-between px-8">
									<div className="flex h-40 w-72 flex-col gap-2 rounded bg-orange-lightest p-3 text-brown-dark drop-shadow-lg">
										<h1 className="text-2xl font-bold">Bem-Vindo!</h1>
										<div className="text-base font-medium">
											Aqui na byron.receitas, você pode encontrar seu novo prato
											favorito!
										</div>
										<div className="flex justify-center py-1">
											<button className="rounded-lg bg-brown-light p-1 px-3 text-base text-white drop-shadow-md transition-all hover:scale-105 focus:scale-105 focus:outline-none">
												Encontrar Receitas
											</button>
										</div>
									</div>
								</div>
							</div>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</section>
			<section className="flex items-center justify-center bg-white px-3 py-16 align-middle md:px-0">
				<div className="flex max-w-5xl flex-wrap items-center justify-center gap-8 align-middle ">
					<CategoryCard />
					<CategoryCard />
					<CategoryCard />
					<CategoryCard />
					<CategoryCard />
					<CategoryCard />
					<CategoryCard />
					<CategoryCard />
					<CategoryCard />
					<CategoryCard />
					<CategoryCard />
					<CategoryCard />
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
