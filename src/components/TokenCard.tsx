import { useRouter } from 'next/router';
import { parseNum } from '@/utils';

export default function TokenCard({ token }: any) {
	const router = useRouter();

	return (
		<>
			<div
				onClick={() => router.push(`/tokens/${token.id}`)}
				className='flex items-center mx-24 text-center justify-center border-b border-blue-400/75 hover:bg-slate-700'>
				{/* Image */}
				<div>
					<img src={token.image} alt='logo' className='h-12' />
				</div>

				{/* Name + Symbol */}
				<div className='text-center items-center justify-center w-[30%]'>
					{token?.name} - {token?.symbol.toUpperCase()}
				</div>

				{/* Current Price */}
				<div className='w-[30%]'>
					Current Price: ${parseNum(token.current_price)}
				</div>

				{/* High + Low + % change */}
				<div className='flex-col w-3/12'>
					High (24h): ${parseNum(token?.high_24h)}
					<br />
					Low (24h): ${parseNum(token?.low_24h)}
					<br />
					{token?.price_change_percentage_24h > 0 ? (
						<span className='text-green-400'>
							{token?.price_change_percentage_24h.toFixed(2)}%
						</span>
					) : (
						<span className='text-red-500'>
							{token?.price_change_percentage_24h.toFixed(2)}%
						</span>
					)}
				</div>
			</div>
		</>
	);
}
