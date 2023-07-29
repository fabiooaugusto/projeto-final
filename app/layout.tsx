import Footer from '@/components/Footer'
import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'

const raleway = Raleway({
	weight: ['400', '500', '600', '700', '800'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'byronReceitas',
	description: 'Um site sobre culinária',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={raleway.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
