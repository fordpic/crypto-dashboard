// On ice for now

import { useRouter } from 'next/router';

export default function SearchBar() {
	const router = useRouter();
	const searchInput = document.getElementById('search-input');

	return (
		<div className='rounded-xl p-2 ml-auto flex'>
			<input
				id='search-input'
				className='border-2 border-blue-500 rounded-xl'
				placeholder='Search'
				type='search'></input>
		</div>
	);
}
