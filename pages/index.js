import Head from 'next/head'
import Quotes from '../Components/Quotes'
import Tagline from '../Components/Tagline'
import Downloads from '../Components/Downloads'
import CallToAction from '../Components/CallToAction'
import CarouselSection from '../Components/CarouselSection'

export default function Home() {
return (
	<div>
		<Head>
			<title>Zombie Me | NFTs</title>
			<meta name="description" content="Sample Project for Bivens Blueprint, LLC" />

			{/* Google Fonts */}
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
			<link href="https://fonts.googleapis.com/css2?family=Potta+One&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />

			{/* Favicons */}
			<link rel="icon" href="/favicon.ico" />
			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			<link rel="manifest" href="/site.webmanifest"></link>
		</Head>
			
		<main>
			<Tagline />
		</main>

		<section style={{ background: '#5C2E7E' }}>
			<Quotes />
		</section>

		<section style={{ background: '#5C2E7E' }}>
			<CarouselSection />
		</section>

		<section id='downloads'>
			<Downloads />
		</section>

		<section style={{ background: '#5C2E7E' }}>
			<CallToAction />
		</section>
	</div>
)
}
