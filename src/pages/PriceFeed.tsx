import Head from 'next/head';
import useSWR from 'swr';
import Layout from '@/components/Layout';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import { fullCoinAPI, fetcher } from '@/utils';
import TokenCard from '@/components/TokenCard';

export default function PriceFeed() {
	const { data } = useSWR(fullCoinAPI, fetcher);

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
					<h2 className='text-center text-4xl text-blue-500 font-bold tracking-wide'>
						PRICE FEED
					</h2>

					<h4 className='text-center text-xl font-semibold pt-4'>
						Top 100 Tokens By Market Cap
					</h4>

					<div className='border-2 border-pink-400 mt-4 justify-center items-center text-center'>
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
