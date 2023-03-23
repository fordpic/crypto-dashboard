import Head from 'next/head';
import Layout from '@/components/Layout';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Token from '@/components/Token';
import useSWR from 'swr';
import { idCoinAPI, fetcher } from '@/utils';
import { useRouter } from 'next/router';

export default function TokenPage() {
	const router = useRouter();
	const { id } = router.query;

	let coinAPI = `${idCoinAPI}/${id}`;
	const { data } = useSWR(coinAPI, fetcher);

	return (
		<>
			<Head>
				<title>CryptoWatch | {id}</title>
				<meta
					name='description'
					content='Dashboard for viewing cryptocurrencies'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Nav />
			<Layout>
				<Token id={id} token={data} />
			</Layout>
			<Footer />
		</>
	);
}
