async function getRecipes(recipeId: string) {
	const res = await fetch(`http://localhost:3000/api/recipes/${recipeId}`)

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

export default async function Recipe({
	params,
}: {
	params: { recipeId: string }
}) {
	const recipe = await getRecipes(params.recipeId)

	return (
		<article>
			<h2>{params.recipeId}</h2>
			<h2>{recipe.title}</h2>
			<div>
				<div className="rounded-md bg-gray-dark p-2 md:m-20 md:p-16 md:pt-4 ">
					<h1 className="text-3xl text-white md:-ml-8">Arroz Branco:</h1>
					<h3 className="pb-4 pt-12 text-center text-white">
						{' '}
						O preparo do arroz soltinho não tem mistério: basta seguir a
						proporção e o tempo que ele dá certo. Refogado com cebola e louro,
						fica saboroso e perfumado.
					</h3>
					<img
						className="w-full rounded-md border-2 border-orange-light"
						src="/img/rice.jpg"
						alt=""
					/>

					<div className="flex flex-col items-center pt-6 md:flex md:flex-row md:items-stretch">
						<div className="mb-4 mt-4 w-full space-y-4 rounded-lg bg-orange-lightest p-2 md:mr-2 md:w-1/3">
							<h2 className="pl-4 pt-4">Ingradiente</h2>
							<hr className="m-4 border-2 border-gray-light" />
							<li>1 xícara (chá) de arroz</li>
							<li>2 xícaras (chá) de água</li>
							<li>½ cebola</li>
							<li>1 colher (sopa) de azeite</li>
							<li>1 folha de louro</li>
							<li>½ colher (chá) de sal</li>
						</div>
						<div className="mb-4 mr-0 mt-4 w-full space-y-4 rounded-lg bg-orange-lightest p-2 md:ml-2 md:w-2/3">
							<h2 className="pl-4 pt-4">Preparo</h2>
							<hr className="m-2 border-2 border-gray-light" />
							<li>
								1.Aqueça uma panela com o azeite, acrescente a cebola, o alho e
								deixe refogar, mexendo até que esteja dourado.
							</li>
							<li>2.Acrescente o arroz, o sal e frite bem.</li>
							<li>
								3.Coloque água fervente até que cubra o arroz, abaixe o fogo e
								deixe cozinhar.
							</li>
							<li>
								4.Caso a água seque e o arroz ainda não esteja cozido, adicione
								mais água.
							</li>
							<li>
								5.Deixe cozinhar até secar, e cheque novamente se já está
								cozido. Desliguei o fogo, solte o arroz com um garfo e sirva.
							</li>
						</div>
					</div>
				</div>
			</div>
		</article>
	)
}
