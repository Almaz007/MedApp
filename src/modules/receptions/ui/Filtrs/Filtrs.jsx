import { useState } from 'react';
import { Button } from '../../../../components/Button/Button';
import { CustomDatePicker } from '../../../../components/CustomDatePicker/CustomDatePicker';
import { ArrowRight } from '../../../../components/Icons/ArrowRight/ArrowRight';
import styles from './styles.module.css';

export const Filtrs = ({ onClick }) => {
	const [date, setDate] = useState(null);
	const cards = [
		{
			id: 1,
			name: 'Специалист',
			action: () => onClick(prev => prev + 1)
		},
		{
			id: 2,
			name: 'Специальность'
		},
		{
			id: 3,
			name: 'Поликлиника'
		}
	];

	return (
		<div className={styles['filtrs']}>
			{cards.map(card => (
				<CardInfo key={card.id} data={card} />
			))}
			<CustomDatePicker
				label='Дата события'
				value={date}
				onChange={newDate => setDate(newDate)}
			/>
			<div className={styles['button-block']}>
				<Button
					text='Применит'
					onClick={() => onClick(0)}
					className={styles['applay-btn']}
				/>
			</div>
		</div>
	);
};

const CardInfo = ({ data }) => {
	return (
		<div className={styles['info-row']} onClick={data?.action}>
			<div className={styles['name']}>{data.name}</div>
			<div className={styles['btn']}>
				<ArrowRight className={styles['svg-icon']} />
			</div>
		</div>
	);
};
