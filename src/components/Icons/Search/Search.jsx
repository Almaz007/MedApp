export const Search = ({ className }) => {
	return (
		<svg
			style={{ display: 'block' }}
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<desc>Created with Pixso.</desc>
			<defs>
				<clipPath id='clip7_3466'>
					<rect
						id='Name=Search'
						rx='0'
						width='23'
						height='23'
						transform='translate(0.5 0.5)'
						fill='white'
						fillOpacity='0'
					/>
				</clipPath>
			</defs>
			<g clipPath='url(#clip7_3466)'>
				<circle
					id='Vector'
					cx='11.5'
					cy='11.5'
					r='9.5'
					className={className}
					stroke='#48494E'
					strokeOpacity='1'
					strokeWidth='1.5'
				/>
				<path
					id='Vector'
					d='M18.5 18.5L22 22'
					className={className}
					stroke='#48494E'
					strokeOpacity='1'
					strokeWidth='1.5'
					strokeLinecap='round'
				/>
			</g>
		</svg>
	);
};
