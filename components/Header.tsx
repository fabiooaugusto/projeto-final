import Link from 'next/link'
import React from 'react'

const Header = () => {
	return (
		<header className="flex h-24 items-center justify-center bg-orange-light drop-shadow-md">
			<div className="flex w-full max-w-5xl items-center justify-between px-3">
				<div className="flex flex-row">
					<div className="px-3">
						<Link href={`http://localhost:3000`}>
							<img className="w-64" src="/img/Logo.png" alt="Logo do site" />
						</Link>
					</div>
				</div>
				<div></div>
			</div>
		</header>
	)
}

export default Header
