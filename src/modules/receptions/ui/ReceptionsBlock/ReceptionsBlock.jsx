import { ReceptionsList } from '../../../../components/ReceptionsList/ReceptionsList';
import styles from './styles.module.css';

export const ReceptionsBlock = ({ receptions = [] }) => {
	return (
		<div className={styles['receptions']}>
			{receptions.map(([key, receptionsList]) => (
				<ReceptionsList
					key={key}
					receptions={receptionsList}
					title={key}
					buttonVisible={false}
				/>
			))}
		</div>
	);
};
