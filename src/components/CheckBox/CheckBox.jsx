import React, { useState } from 'react';
import styles from './styles.module.css';

const Checkbox = () => {
	const [checked, setChecked] = useState(false);

	return (
		<label className={styles['checkbox-wrapper']}>
			<input
				type='checkbox'
				checked={checked}
				onChange={() => setChecked(!checked)}
			/>
			<span
				className={`${styles['custom-checkbox']} ${
					checked ? styles['checked'] : ''
				}`}
			>
				{checked && (
					<svg
						className={styles['check-icon']}
						viewBox='0 0 24 24'
						fill='none'
						stroke='white'
						strokeWidth='3'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<polyline points='4 12 9 17 20 6' />
					</svg>
				)}
			</span>
		</label>
	);
};

export default Checkbox;
