export const Logo = ({ width = '106', height = '90' }) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 106 90'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M29.8104 14.9052C29.8104 6.67328 36.4837 0 44.7155 0C52.9472 0 59.6205 6.67328 59.6205 14.9052V29.8104H74.5259C82.7576 29.8104 89.431 36.4837 89.431 44.7155C89.431 52.9472 82.7576 59.6205 74.5259 59.6205H59.6205V74.5259C59.6205 82.7576 52.9472 89.431 44.7155 89.431C36.4837 89.431 29.8104 82.7576 29.8104 74.5259V59.6205H14.9052C6.67328 59.6205 0 52.9472 0 44.7155C0 36.4837 6.67328 29.8104 14.9052 29.8104H29.8104V14.9052Z'
				fill='#D3D7F1'
			/>
			<g filter='url(#filter0_d_2001_2097)'>
				<path
					d='M74.5259 29.8103H44.7157C36.4838 29.8103 29.8105 36.4836 29.8105 44.7155V44.7156C29.8105 52.9475 36.4838 59.6207 44.7157 59.6207H74.5259C82.7578 59.6207 89.4311 52.9475 89.4311 44.7156V44.7155C89.4311 36.4836 82.7578 29.8103 74.5259 29.8103Z'
					fill='#4B60D7'
				/>
				<path
					d='M59.621 29.8103H44.7156C36.4839 29.8103 29.8105 36.4836 29.8105 44.7154C29.8105 52.9474 36.4839 59.6207 44.7156 59.6207H59.621V29.8103Z'
					fill='white'
				/>
			</g>
			<defs>
				<filter
					id='filter0_d_2001_2097'
					x='13.9117'
					y='14.9051'
					width='91.4183'
					height='61.608'
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood floodOpacity='0' result='BackgroundImageFix' />
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset dy='0.993677' />
					<feGaussianBlur stdDeviation='7.94942' />
					<feComposite in2='hardAlpha' operator='out' />
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0.28 0 0 0 0 0.28 0 0 0 0 0.52 0 0 0 0.32 0'
					/>
					<feBlend
						mode='normal'
						in2='BackgroundImageFix'
						result='effect1_dropShadow_2001_2097'
					/>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect1_dropShadow_2001_2097'
						result='shape'
					/>
				</filter>
			</defs>
		</svg>
	);
};
