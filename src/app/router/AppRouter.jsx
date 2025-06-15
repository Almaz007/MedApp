import { Routes, Route } from 'react-router';
import { Layout } from '../Layout/Layout';
import { HomePage } from '../../pages/Home/HomePage';
import { MorePage } from '../../pages/More/MorePage';
import { MedСardPage } from '../../pages/MedСard/MedСardPage';
import { AuthPage } from '../../pages/Auth/AuthPage';
import { ReceptionsPage } from '../../pages/ReceptionsPage/ReceptionPage';

function AppRouter() {
	return (
		<Routes>
			<Route index element={<AuthPage />} />
			<Route path='/receptions' element={<ReceptionsPage />} />
			<Route element={<Layout />}>
				<Route path='main' element={<HomePage />} />
				<Route path='medicalCard' element={<MedСardPage />} />
				<Route path='more' element={<MorePage />} />
			</Route>
		</Routes>
	);
}

export default AppRouter;
