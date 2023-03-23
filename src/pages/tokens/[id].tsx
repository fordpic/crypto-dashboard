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
			<Nav />
			<Layout>
				<Token id={id} token={data} />
			</Layout>
			<Footer />
		</>
	);
}
