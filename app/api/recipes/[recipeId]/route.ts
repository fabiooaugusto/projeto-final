import { NextResponse } from 'next/server'
import { recipes } from '../../recipes'

export async function GET(
	request: Request,
	{ params }: { params: { recipeId: string } },
) {
	const recipe = recipes.find((recipe) => recipe.id === Number(params.recipeId))

	console.log(recipe, params.recipeId, recipes)

	return NextResponse.json(recipe || 'no recipe found')
}
