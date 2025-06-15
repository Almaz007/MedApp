import { Button } from '../../../../components/Button/Button';
import Checkbox from '../../../../components/CheckBox/CheckBox';
import styles from './styles.module.css';

export const Specialists = ({ onClick }) => {
	const cards = [
		{
			id: 1,
			fullName: 'Иванов Сергей Александрович',
			count: 2,
			imgSrc: '/images/Photo1.png'
		},
		{
			id: 2,
			fullName: 'Петрова Анна Викторовна',
			count: 12,
			imgSrc: '/images/Photo2.png'
		},
		{
			id: 3,
			fullName: 'Смирнов Алексей Дмитриевич',
			count: 1,
			imgSrc: '/images/Photo3.png'
		},
		{
			id: 4,
			fullName: 'Львова Марфа Кирилловна',
			count: 0,
			imgSrc: '/images/Photo4.png'
		}
	];

	return (
		<div className={styles['specialists']}>
			{cards.map(card => (
				<CardInfo key={card.id} data={card} />
			))}
			<div className={styles['button-block']}>
				<Button
					text='Применить'
					onClick={() => onClick(0)}
					className={styles['applay-btn']}
				/>
			</div>
		</div>
	);
};

const CardInfo = ({ data }) => {
	return (
		<div>
			<div className={styles['info-row']} onClick={data?.action}>
				<div className={styles['person-info']}>
					<div className={styles['img']}>
						<img src={data.imgSrc} alt='image' />
					</div>
					<div className={styles['name']}>{data.fullName}</div>
				</div>

				<div className={styles['actions']}>
					<div className={styles['count']}>{data.count}</div>
					<Checkbox />
				</div>
			</div>
			{data.id !== 4 && (
				<div className={styles['line-block']}>
					<hr className={styles['line']} />
				</div>
			)}
		</div>
	);
};
