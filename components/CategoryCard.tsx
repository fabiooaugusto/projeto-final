import React from 'react'

const CategoryCard = () => {
	return (
		<button className="h-40 w-72 rounded-md bg-gray-dark p-2 text-white transition-all hover:scale-105 focus:scale-105 focus:outline-none md:h-28 md:w-48 md:p-1">
			<div className="flex h-full w-full flex-col rounded-md border border-white p-2 pt-1">
				<h3 className="text-2xl md:text-xl">titulo</h3>
				<div className="flex flex-row gap-1">
					<div className="w-20">
						<img src="/img/icon-basicas.png" alt="Ícone" />
					</div>
					<div className="text-lg md:text-sm">
						Lorem ipsum dolor sit, amet consectetur
					</div>
				</div>
			</div>
		</button>
	)
}

export default CategoryCard
