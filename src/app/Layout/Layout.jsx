import { Outlet } from 'react-router';
import { Header } from '../../components/Header/Header';
import { ButtonNav } from '../../components/ButtomNav/ButtomNav';

export const Layout = () => {
	return (
		<>
			<div className={'container'}>
				<Header />
				<Outlet />
			</div>
			<ButtonNav />
		</>
	);
};
