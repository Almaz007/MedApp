import { Login } from '../../modules/Login/ui/Login/Login';
import { Registration } from '../../modules/registration/ui/Registration/Registration';
import styles from './styles.module.css';
import { useState } from 'react';
import { Logo } from '../../components/Icons/Logo/Logo';
import { Button } from '../../components/Button/Button';

export const AuthPage = () => {
	const [choise, setChoise] = useState(null);

	const content = {
		login: <Login prevContent={() => setChoise(null)} />,
		registration: <Registration prevContent={() => setChoise(null)} />
	};

	const defaultContents = (
		<div className={styles['default-content']}>
			<div className={styles['logo']}>
				<Logo />
				<div className={styles['logo-text']}>Электронная Медицинская карта</div>
			</div>
			<div className={styles['btns']}>
				<Button
					text='Войти'
					className={styles['btn']}
					onClick={() => setChoise('login')}
				/>
				<div
					className={styles['reg-btn']}
					onClick={() => setChoise('registration')}
				>
					Зарегистрироваться
				</div>
			</div>
		</div>
	);
	return (
		<section className={styles['auth']}>
			<div className={styles['container']}>
				{choise ? content[choise] : defaultContents}
			</div>
		</section>
	);
};
