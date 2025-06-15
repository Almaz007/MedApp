import { useState } from 'react';
import styles from './styles.module.css';
import { EyeSlashIcon } from '../Icons/EyeSlashIcon/EyeSlashIcon';
import { EyeIcon } from '../Icons/EyeIcon/EyeIcon';
// import { EyeIcon, EyeSlashIcon } from '../Icons'; // Предполагаем, что у вас есть эти иконки
export const Input = ({ type, className, ...props }) => {
	const [showPassword, setShowPassword] = useState(false);

	// Определяем, нужно ли показывать кнопку переключения видимости
	const shouldShowToggle = type === 'password';

	// Определяем фактический тип инпута
	const inputType = shouldShowToggle && showPassword ? 'text' : type;

	return (
		<div className={styles['input-wrapper']}>
			<input
				className={[styles['input'], className].join(' ')}
				type={inputType}
				{...props}
			/>
			{shouldShowToggle && (
				<button
					type='button'
					className={styles['toggle-button']}
					onClick={() => setShowPassword(!showPassword)}
					aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
				>
					{showPassword ? <EyeSlashIcon /> : <EyeIcon />}
				</button>
			)}
		</div>
	);
};
