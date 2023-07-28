import React from 'react'

const Header = () => {
	return (
		<header className="flex h-24 items-center justify-center bg-orange-light drop-shadow-md">
			<div className="flex w-full max-w-5xl items-center justify-between px-3">
				<div className="flex flex-row">
					<button className="inline md:hidden">
						<img className="w-7" src="/img/menu.png" alt="Ícone do menu" />
					</button>
					<div className="px-3">
						<img className="w-64" src="/img/Logo.png" alt="Logo do site" />
					</div>
				</div>
				<div>
					<button className="hidden text-2xl hover:underline focus:underline md:inline">
						Encontrar Receitas
					</button>
				</div>
			</div>
		</header>
	)
}

export default Header
