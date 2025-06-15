import { Button } from '../Button/Button';
import styles from './styles.module.css';
import { ReceptionCard } from '../ReceptionCard/ReceptionCard';

export const ReceptionsList = ({
	receptions = [],
	title = '',
	buttonVisible = true
}) => {
	return (
		<div>
			<h2 className={styles['title']}>{title}</h2>
			<div className={styles['receptions']}>
				{receptions.length === 0 && <div>Нету записей</div>}
				{receptions.map((reception, index) => (
					<ReceptionCard
						key={index}
						time={reception.time}
						date={reception.date}
						doctorProfession={reception.doctorProfession}
						clientName={reception.clientName}
					/>
				))}
			</div>
			{buttonVisible && <Button text='Записаться' className={styles['btn']} />}
		</div>
	);
};
