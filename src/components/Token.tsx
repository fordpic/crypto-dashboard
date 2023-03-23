import PriceChart from './PriceChart';
import PercentageTable from './PercentageTable';
import { parseNum } from '@/utils';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export default function Token({ token, id }: any) {
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

			<div className='flex items-center border-2 border-purple-500'>
				<div className='flex-col justify-center justify-items-center items-center border-2 border-green-400'>
					<h1>Price Chart (24hr)</h1>
					<PriceChart id={id} />
					<PercentageTable token={token} />
				</div>

				<div className='flex flex-col justify-center text-center'>
					<h1 className='text-xl lg:text-3xl pb-2 text-center text-blue-500 border-b border-dotted border-slate-500/80'>
						{token?.name} Price Statistics
					</h1>

					{/* Current Price */}
					<h1 className='text-md pb-1 pt-9 border-b border-dotted border-slate-500/80'>
						<span className='text-md lg:text-lg'>Current:</span> $
						{parseNum(token?.market_data.current_price?.usd)}
					</h1>

					{/* High 24h */}
					<h1 className='text-md py-2 border-b border-dotted border-slate-500/80'>
						<span className='text-md lg:text-lg'>High (24h):</span> $
						{parseNum(token?.market_data.high_24h.usd)}
					</h1>

					{/* Low 24h */}
					<h1 className='text-md py-2 border-b border-dotted border-slate-500/80'>
						<span className='text-md lg:text-lg'>Low (24h):</span> $
						{parseNum(token?.market_data.low_24h.usd)}
					</h1>

					{/* Total Volume */}
					<h1 className='text-md py-2 border-b border-dotted border-slate-500/80'>
						<span className='text-md lg:text-lg'>Total Volume:</span> $
						{parseNum(token?.market_data.total_volume.usd)}
					</h1>

					{/* Market Cap */}
					<h1 className='text-md py-2 border-b border-dotted border-slate-500/80'>
						<span className='text-md lg:text-lg'>Market Cap:</span> $
						{parseNum(token?.market_data?.market_cap.usd)}
					</h1>

					{/* ATH + date */}
					<h1 className='text-md py-2 border-b border-dotted border-slate-500/80'>
						<span className='text-md lg:text-lg'>All Time High:</span> $
						{parseNum(token?.market_data.ath.usd)}{' '}
						{token?.market_data?.ath_change_percentage > 0 ? (
							<span className='text-green-400 pl-1'>
								{token?.market_data.ath_change_percentage.usd.toFixed(2)}%
							</span>
						) : (
							<span className='text-red-500 pl-1'>
								{token?.market_data.ath_change_percentage.usd.toFixed(2)}%
							</span>
						)}
						<br />
						<span className='text-sm'>
							{dayjs(token?.market_data?.ath_date.usd).format('DD/MM/YYYY')} (
							{dayjs(token?.market_data?.ath_date.usd).fromNow()})
						</span>
					</h1>

					{/* ATL + date */}
					<h1 className='text-md py-2 border-b border-dotted border-slate-500/80'>
						<span className='text-md lg:text-lg'>All Time Low:</span> $
						{parseNum(token?.market_data.atl.usd)}{' '}
						{
							<span className='text-green-400 pl-1'>
								{parseNum(
									token?.market_data.atl_change_percentage.usd.toFixed(2)
								)}
								%
							</span>
						}
						<br />
						<span className='text-sm'>
							{dayjs(token?.market_data?.atl_date.usd).format('DD/MM/YYYY')} (
							{dayjs(token?.market_data?.atl_date.usd).fromNow()})
						</span>
					</h1>
				</div>
			</div>
		</>
	);
}
