import { useRouter } from 'next/router';

export default function Homepage() {
	const router = useRouter();

	return (
		<div className='flex flex-col items-center'>
			<div className='text-center text-3xl font-bold'>
				<h1 className='p-10 text-4xl'>
					Welcome to <span className='text-blue-500'>CryptoWatch</span>!
				</h1>
			</div>

			<div className='text-center text-xl font-semibold justify-center max-w-[50%] pt-36'>
				<p className=''>
					<span className='text-blue-500'>CryptoWatch</span> is a place for
					cryptocurrency users to come and find the most up-to-date information
					on the latest and greatest tokens.
				</p>

				<h3 className='pt-8 flex justify-center'>
					Powered by <span className='text-green-500 pl-1'>CoinGecko</span>
					<img src='/cg-logo.png' className='h-6 pl-1' />
				</h3>
			</div>

			<div>
				<button
					onClick={() => router.push(`/PriceFeed`)}
					className='p-6 px-14 rounded-xl bg-blue-500 hover:bg-blue-400/80 mt-10 font-semibold'>
					Enter App
				</button>
			</div>
		</div>
	);
}
