interface Recipe {
	id: number
	title: string
	ingredients: string[]
	imageUrl: string
	category: number
}

export const recipes: Recipe[] = [
	{
		id: 0,
		title: 'bacon & eggs',
		ingredients: ['bacon', 'eggs'],
		imageUrl: '',
		category: 0,
	},
	{
		id: 1,
		title: '',
		ingredients: [],
		imageUrl: '',
		category: 0,
	},
]
