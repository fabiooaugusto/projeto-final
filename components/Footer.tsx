import React from 'react'

const Footer = () => {
	return (
		<footer className="flex h-28 flex-col items-center justify-center gap-2 bg-orange-light px-3">
			<div className="flex w-full max-w-5xl flex-row items-center justify-between">
				<div className="flex flex-row gap-2">
					<div>
						<img className="w-5" src="/img/icon-contato.png" alt="" />
					</div>
					<div className="flex flex-col">
						<span>(35) 91234-5678</span>
						<span>byronreceitas@ymail.com</span>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-2">
					<img className="w-5" src="/img/icon-instagram.png" alt="" />
					<img className="w-5" src="/img/icon-youtube.png" alt="" />
					<img className="w-5" src="/img/icon-facebook.png" alt="" />
					<img className="w-5" src="/img/icon-twitter.png" alt="" />
				</div>
			</div>
			<div>
				<span className="flex">
					Desenvolvido por{' '}
					<img
						className="h-5 px-1"
						src="/img/Logo-bsol.png"
						alt="Logo da byron.solutions"
					/>
				</span>
			</div>
		</footer>
	)
}

export default Footer
