import { ArrowLeft } from '../Icons/ArrowLeft/ArrowLeft';
import styles from './styles.module.css';

export const PrevBtn = ({ onClick }) => {
	return (
		<div className={styles['prev-button']} onClick={onClick}>
			<ArrowLeft />
		</div>
	);
};
