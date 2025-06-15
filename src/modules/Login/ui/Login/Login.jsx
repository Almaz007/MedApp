import { useState } from 'react';
import { Input } from '../../../../components/Input/Input';
import { PrevBtn } from '../../../../components/PrevBtn/PrevBtn';
import styles from './styles.module.css';
import { Logo } from '../../../../components/Icons/Logo/Logo';
import { Button } from '../../../../components/Button/Button';
import { GosIcon } from '../../../../components/Icons/GosIcon/GosIcon';
import { Link } from 'react-router';

export const Login = ({ prevContent }) => {
	const [loginData, setLoginData] = useState({
		snils: '123-456-789 12|',
		password: ''
	});
	const { snils, password } = loginData;
	return (
		<div className={styles['login']}>
			<PrevBtn onClick={prevContent} />
			<div className={styles['content']}>
				<div className={styles['logo']}>
					<Logo width='48' height='48' />
					<div className={styles['text']}>Вход</div>
				</div>
				<div className={styles['inputs']}>
					<Input
						value={snils}
						placeholder={'Номер снилса'}
						onChange={e =>
							setLoginData(prev => ({ ...prev, snils: e.target.value }))
						}
					/>
					<Input
						value={password}
						placeholder={'Пароль'}
						type={'password'}
						onChange={e =>
							setLoginData(prev => ({ ...prev, password: e.target.value }))
						}
					/>
					<div className={styles['forgot-password']}>Забыли пароль ?</div>
				</div>
				<div className={styles['btns']}>
					<Link to={'/main'}>
						<Button text='войти' className={styles['btn']} />
					</Link>
					<div className={styles['gos-row']}>
						<GosIcon /> <div className={styles['gos-text']}>Госуслуги</div>
					</div>
				</div>
			</div>
		</div>
	);
};
