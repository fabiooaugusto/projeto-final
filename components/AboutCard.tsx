import React from 'react'

interface About {
	imgUrl: string
	text: string
}

const AboutCard = ({ imgUrl, text }: About) => {
	return (
		<div className="flex flex-col items-center justify-center gap-3 bg-orange-light p-3 font-medium text-brown-dark md:flex-row">
			<img className="w-36" src={imgUrl} alt="Foto da Pessoa" />
			<div className="w-auto">{text}</div>
		</div>
	)
}

export default AboutCard
