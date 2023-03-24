import { useRouter } from 'next/router';
import SearchBar from './SearchBar';

export default function Nav({ data }: any) {
	const router = useRouter();

	return (
		<div className='bg-slate-300 border-b border-slate-500/95'>
			<nav className='flex p-3'>
				<h1
					onClick={() => router.push(`/`)}
					className='text-4xl font-bold cursor-pointer text-blue-500'>
					CryptoWatch
				</h1>
				<SearchBar data={data} />
			</nav>
		</div>
	);
}
