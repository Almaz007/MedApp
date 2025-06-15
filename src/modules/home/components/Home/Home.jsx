import { MedicalCard } from '../MedicalСard/MedicalCard';
import { ReceptionsList } from '../../../../components/ReceptionsList/ReceptionsList';
import { RepresentationInfo } from '../RepresentationInfo/RepresentationInfo';
import styles from './styles.module.css';
const receptions = [
	{
		date: '12 февр., ср',
		time: '00:30',
		doctorProfession: 'Терапевт',
		clientName: 'Иванов И.И. каб. 213'
	},
	{
		date: '21 февр., ср',
		time: '09:15',
		doctorProfession: 'Оториноларинголог',
		clientName: 'Иванов И. И. каб. 213'
	}
];
export const Home = () => {
	return (
		<section className={styles['home']}>
			<RepresentationInfo />
			<ReceptionsList receptions={receptions} title='Ближайшие приемы' />
			<MedicalCard />
		</section>
	);
};
