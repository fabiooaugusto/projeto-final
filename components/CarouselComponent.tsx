'use client'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Carousel from 'react-bootstrap/Carousel'
import Link from 'next/link'

const CarouselComponent = () => {
	return (
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
									<Link
										href={`http://localhost:3000/recipes`}
										className="rounded-lg bg-brown-light p-1 px-3 text-base text-white drop-shadow-md transition-all hover:scale-105 focus:scale-105 focus:outline-none"
									>
										Encontrar Receitas
									</Link>
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
	)
}

export default CarouselComponent
