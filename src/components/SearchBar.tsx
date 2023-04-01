import { useState } from 'react';
import { useRouter } from 'next/router';

// On ice for now

// export default function SearchBar({ data }: any) {
// 	const router = useRouter();
// 	const [query, setQuery] = useState('');
// 	const id = data?.id;
// 	const name = data?.name;

// 	const filteredTokens = data?.filter((req: string) => {
// 		if (query) {
// 			if (
// 				id?.toLowerCase().includes(query.toLowerCase()) ||
// 				name?.toLowerCase().includes(query.toLowerCase())
// 			) {
// 				router.push(`tokens/${query}`);
// 			} else {
// 				router.push(`/Error`);
// 			}
// 		}
// 	});

// 	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// 		setQuery(event.target.value);
// 		filteredTokens(query);
// 		console.log(query);
// 	};

// 	return (
// 		<div className='rounded-xl p-2 ml-auto flex'>
// 			<input
// 				className='border-2 border-blue-500 rounded-xl'
// 				placeholder='Search'
// 				onChange={handleInputChange}
// 				value={query}
// 				type='search'></input>
// 		</div>
// 	);
// }
