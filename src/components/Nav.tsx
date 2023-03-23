import SearchBar from './SearchBar';

export default function Nav() {
	return (
		<div className='border-b-2 border-slate-500/95'>
			<nav className='flex p-2'>
				<h1 className='text-4xl font-bold text-blue-500'>CryptoWatch</h1>
				<SearchBar />
			</nav>
		</div>
	);
}
