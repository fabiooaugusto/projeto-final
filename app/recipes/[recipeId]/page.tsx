export default function Recipe({ params }: { params: { recipeId: string } }) {
	return (
		<article>
			<h2>{params.recipeId}</h2>
		</article>
	)
}
