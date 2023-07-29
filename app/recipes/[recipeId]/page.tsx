import { Recipe } from '@/app/api/recipes'
const URL_API = 'http://localhost:3000/api/recipes'
async function getData(recipeId: string): Promise<Recipe> {
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
	const recipe = await getData(params.recipeId)

	return (
		<div className="flex justify-center">
			<div className="w-full max-w-4xl bg-gray-dark p-2 md:m-20 md:rounded-md md:p-16 md:pt-4 ">
				<h1 className="text-b mb-10 text-3xl font-bold text-white md:ml-8">
					{recipe.title}
				</h1>
				<div className="flex justify-center ">
					<img
						className="aspect-video w-full rounded-lg border-4 border-orange-light"
						src={recipe.imageUrl}
						alt=""
					/>
				</div>
				<div className="flex flex-col items-center pt-6 md:flex md:flex-row md:items-stretch">
					<div className="mb-4 mt-4 w-full space-y-4 rounded-lg bg-orange-lightest p-2 md:mr-2 md:w-1/3">
						<h2 className="pl-4 pt-4">Ingredientes</h2>
						<hr className="m-4 border-2 border-gray-light" />
						{recipe.ingredients.map((ingredient) => {
							return <li>{ingredient}</li>
						})}
					</div>
					<div className="mb-4 mr-0 mt-4 w-full space-y-4 rounded-lg bg-orange-lightest p-2 md:ml-2 md:w-2/3">
						<h2 className="pl-4 pt-4">Preparo</h2>
						<hr className="m-2 border-2 border-gray-light" />
						{recipe.instructions.map((instructions) => {
							return <li>{instructions}</li>
						})}
					</div>
				</div>
			</div>
		</div>
	)
}
