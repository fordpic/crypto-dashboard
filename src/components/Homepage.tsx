export default function Homepage() {
	return (
		<div className='flex flex-col items-center'>
			<div className='text-center text-3xl font-bold'>
				<h1 className='p-8'>
					Welcome to <span className='text-blue-500'>CryptoWatch</span>!
				</h1>
			</div>

			<div className='text-center text-xl font-semibold justify-center max-w-[50%] pt-36 border border-green-200'>
				<p className=''>
					<span className='text-blue-500'>CryptoWatch</span> is a place for
					cryptocurrency users to come and find the most up-to-date information
					on the latest and greatest tokens.
				</p>

				<h3 className='pt-8'>
					Powered by <span className='text-green-500'>CoinGecko</span>
				</h3>
			</div>
		</div>
	);
}
