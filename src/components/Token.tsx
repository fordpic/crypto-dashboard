export default function Token({ token }: any) {
	return (
		<>
			{/* Title + Logo */}
			<div className='flex items-center justify-center space-x-4'>
				<img src={token?.image.small} alt='token-img' />
				<h1 className='text-2xl font-bold'>
					{token?.name} - {token?.symbol.toUpperCase()}
					<br />
					<span className='text-xl'>
						Market Cap Rank: #{token?.market_cap_rank}
					</span>
				</h1>
			</div>

			<div className='flex-col items-center border-2 border-purple-500'>
				<div>
					<div>
						<h1>Price Chart (24hr)</h1>
						<h1>p chart here</h1>
						<h1>p table here</h1>
					</div>

					<div>Price Statistics</div>
				</div>
			</div>
		</>
	);
}
