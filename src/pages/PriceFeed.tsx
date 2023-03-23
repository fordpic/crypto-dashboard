import Head from 'next/head';
import Layout from '@/components/Layout';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';

export default function PriceFeed() {
	return (
		<>
			<Head>
				<title>Crypto Dashboard</title>
				<meta
					name='description'
					content='Dashboard for viewing cryptocurrencies'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<SearchBar />
			<main>
				<Layout>
					<div>Prices go here</div>
				</Layout>
			</main>
			<Footer />
		</>
	);
}
