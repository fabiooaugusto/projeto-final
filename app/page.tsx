import CategoryCard from "@/components/CategoryCard";
import AboutCard from "@/components/AboutCard";


export default function Home() {
	return (
		<main>
			<section>
				<div className="bg-no-repeat bg-cover bg-center h-[300px]" style={{backgroundImage:"url('img/bolo2.png')"}}>
						<div className="hidden md:flex items-center justify-center h-[300px]">
							<div className="flex items-center justify-between w-full max-w-5xl px-8">
								<div className="flex flex-col gap-2 bg-orange-lightest text-brown-dark w-72 h-40 rounded drop-shadow-lg p-3">
									<h1 className="text-2xl font-bold">
										Bem-Vindo!
									</h1>
									<div className="text-base font-medium">
										Aqui na byron.receitas, você pode encontrar seu novo prato favorito!
									</div>
									<div className="flex justify-center py-1">
										<button className="text-base text-white bg-brown-light rounded-lg drop-shadow-md p-1 px-3 hover:scale-105 focus:scale-105 focus:outline-none transition-all">
											Encontrar Receitas
										</button>
									</div>
								</div>
							</div>
						</div>
				</div>
			</section>

			<section className="flex align-middle justify-center items-center bg-white py-16 px-3 md:px-0">
				<div className="flex flex-wrap align-middle justify-center items-center max-w-5xl gap-8 ">
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

			<section className="flex flex-col gap-8 items-center justify-center bg-gray-dark text-white pb-16 pt-6">
				<h1 className="flex items-center justify-between w-full text-3xl pl-5 lg:max-w-4xl lg:pl-0">Quem Somos</h1>
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
