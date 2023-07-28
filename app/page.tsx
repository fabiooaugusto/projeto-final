import CategoryCard from '@/components/CategoryCard'
import AboutCard from '@/components/AboutCard'

export default function Home() {
	return (
		<main>
			<section>
				<div
					className="h-[300px] bg-cover bg-center bg-no-repeat"
					style={{ backgroundImage: "url('img/bolo2.png')" }}
				>
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
				</div>
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
					<div className="grid gap-5 px-14 lg:max-w-4xl lg:px-0">
						<AboutCard />
						<AboutCard />
						<AboutCard />
						<AboutCard />
					</div>
				</div>
			</section>
		</main>
	)
}
