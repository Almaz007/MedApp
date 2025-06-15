import { useState } from 'react';
import { Logo } from '../../../../components/Icons/Logo/Logo';
import { PrevBtn } from '../../../../components/PrevBtn/PrevBtn';
import styles from './styles.module.css';
import { Button } from '../../../../components/Button/Button';
import { Link } from 'react-router';
import { Input } from '../../../../components/Input/Input';
import Checkbox from '../../../../components/CheckBox/CheckBox';

export const Registration = ({ prevContent }) => {
	const [stage, setStage] = useState(1);
	const [inputsData, setInputsData] = useState({
		1: {
			snils: {
				type: 'text',
				value: '',
				placeholder: 'СНИЛС'
			},
			lastName: {
				type: 'text',
				value: '',
				placeholder: 'Фамилия'
			},
			firstName: {
				type: 'text',
				value: '',
				placeholder: 'Имя'
			},
			patronymic: {
				type: 'text',
				value: '',
				placeholder: 'Отчество'
			},
			notPatronymic: {
				type: 'checkBox',
				value: false,
				text: 'нет отчества'
			}
		},
		2: {
			phoneNumber: {
				type: 'text',
				value: '',
				placeholder: 'Номер телефона'
			},
			email: {
				type: 'email',
				value: '',
				placeholder: 'Почта'
			}
		},
		3: {
			password: {
				type: 'password',
				value: '',
				placeholder: 'Пароль'
			},
			confirmPassword: {
				type: 'password',
				value: '',
				placeholder: 'Подтвердите пароль'
			}
		}
	});

	const stagesData = [
		{ name: 'Личные данные' },
		{ name: 'Контактные данные' },
		{ name: 'Безопасность' }
	];

	const handleInputChange = (stageKey, fieldKey, value) => {
		setInputsData(prev => ({
			...prev,
			[stageKey]: {
				...prev[stageKey],
				[fieldKey]: {
					...prev[stageKey][fieldKey],
					value: value
				}
			}
		}));
	};
	console.log(stage);
	return (
		<div className={styles['registration']}>
			<PrevBtn
				onClick={stage === 1 ? prevContent : () => setStage(prev => prev - 1)}
			/>
			<div className={styles['content']}>
				<div className={styles['logo']}>
					<Logo width='48' height='48' />
					<div className={styles['text']}>Регистрация</div>
					<div className='desc-stage'>{`${stage}/3 ${
						stagesData[stage - 1].name
					}`}</div>
				</div>
				<form className={styles['inputs']}>
					{Object.entries(inputsData[stage]).map(([key, field]) => (
						<div
							key={key}
							className={[
								styles['input-row'],
								key === 'notPatronymic' ? styles['patr-input'] : undefined
							].join(' ')}
						>
							{key === 'notPatronymic' ? (
								<Checkbox />
							) : (
								<Input
									type={field.type}
									// style={{
									// 	width: key === 'notPatronymic' ? 'max-content' : '100%'
									// }}
									value={field.value}
									placeholder={field.placeholder}
									checked={field.type === 'checkBox' ? field.value : undefined}
									onChange={e =>
										handleInputChange(
											stage,
											key,
											field.type === 'checkBox'
												? e.target.checked
												: e.target.value
										)
									}
									text={field.text}
								/>
							)}
							{key === 'notPatronymic' && (
								<div className={styles['checkbox-text']}>нет отчества</div>
							)}
						</div>
					))}
				</form>
				<div className={styles['controll-btn']}>
					{stage < 3 && (
						<Button
							text='Продолжить'
							className={styles['btn']}
							onClick={() => setStage(prev => prev + 1)}
						/>
					)}
					{stage === 3 && (
						<Link to='/main'>
							<Button text='Зарегистрироваться' className={styles['btn']} />
						</Link>
					)}
				</div>
				<div className={styles['desc-text']}>
					Нажимая кнопку “Зарегистрироваться”, вы соглашаетесь с{' '}
					<span>Условиями использования</span> и{' '}
					<span>Политикой конфиденциальности</span>
				</div>
			</div>
		</div>
	);
};
