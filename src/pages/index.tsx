import Head from 'next/head';
import Layout from '@/components/Layout';
import Homepage from '@/components/Homepage';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';

export default function Home() {
	return (
		<>
			<Head>
				<title>CryptoWatch</title>
				<meta
					name='description'
					content='Dashboard for viewing cryptocurrencies'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Nav />
			<main>
				<Layout>
					<Homepage />
				</Layout>
			</main>
			<Footer />
		</>
	);
}
