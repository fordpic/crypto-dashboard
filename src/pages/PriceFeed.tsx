import Head from 'next/head';
import useSWR from 'swr';
import Layout from '@/components/Layout';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import { fullCoinAPI, fetcher } from '@/utils';
import TokenCard from '@/components/TokenCard';

export default function PriceFeed() {
	const { data } = useSWR(fullCoinAPI, fetcher);

	return (
		<>
			<Head>
				<title>CryptoWatch | Price Feed</title>
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
					<h2 className='text-center text-4xl text-blue-500 font-bold tracking-wider'>
						PRICE FEED
					</h2>

					<h4 className='text-center text-xl font-semibold pt-4'>
						Top <span className='text-blue-500'>100</span> Tokens By Market Cap
					</h4>

					<div className='mt-4 justify-center items-center text-center'>
						<div>
							{data?.map((token: any) => (
								<TokenCard key={token.id} token={token} />
							))}
						</div>
					</div>
				</Layout>
			</main>
			<Footer />
		</>
	);
}
