interface Recipe {
    id: number
    title: string
    ingredients: string[]
    imageUrl: string
}

export const recipes: Recipe[] = [
    {
        id: 0,
        title: 'bacon & eggs',
        ingredients: ['bacon', 'eggs'],
        imageUrl: ''
    },
    {
        id: 1,
        title: 'fodase',
        ingredients: [],
        imageUrl: ''
    }
]