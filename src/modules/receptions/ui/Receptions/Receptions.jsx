import { useState } from 'react';
import styles from './styles.module.css';
import { PrevBtn } from '../../../../components/PrevBtn/PrevBtn';
import { useNavigate } from 'react-router';
import { Search } from '../../../../components/Icons/Search/Search';
import { Filtr } from '../../../../components/FiltrIcon/FiltrIcon';
import { Input } from '../../../../components/Input/Input';
import { ReceptionsBlock } from '../ReceptionsBlock/ReceptionsBlock';
import { Filtrs } from '../Filtrs/Filtrs';
import { Specialists } from '../Specialists/Specialists';

export const Receptions = () => {
	const navigate = useNavigate();
	const [stage, setStage] = useState(0);
	const [inputValue, setInputValue] = useState('');
	const [sort, setSort] = useState('asc'); // 'asc' or 'desc'
	const [findMode, setFindMode] = useState(false);

	const [receptions] = useState({
		2023: [
			{
				date: '2023',
				time: '04 Сентября',
				doctorProfession: 'Терапевт',
				clientName: 'Иванов И.И. каб. 213'
			},
			{
				date: '2023',
				time: '24 Августа',
				doctorProfession: 'Хирург',
				clientName: 'Иванов И. И. каб. 213'
			}
		],
		2024: [
			{
				date: '2024',
				time: '24 Июня',
				doctorProfession: 'Терапевт',
				clientName: 'Иванов И.И. каб. 213'
			},
			{
				date: '2024',
				time: '11 Февраля',
				doctorProfession: 'Стоматолог',
				clientName: 'Иванов И. И. каб. 213'
			},
			{
				date: '2024',
				time: '22 Мая',
				doctorProfession: 'Терапевт',
				clientName: 'Иванов И.И. каб. 213'
			},
			{
				date: '2024',
				time: '11 Февраля',
				doctorProfession: 'Стоматолог',
				clientName: 'Иванов И. И. каб. 213'
			}
		],
		2025: [
			{
				date: '2025',
				time: '24 Мая',
				doctorProfession: 'Терапевт',
				clientName: 'Иванов И.И. каб. 213'
			},
			{
				date: '2025',
				time: '11 Февраля',
				doctorProfession: 'Стоматолог',
				clientName: 'Иванов И. И. каб. 213'
			}
		]
	});

	const monthsMap = {
		Января: 0,
		Февраля: 1,
		Марта: 2,
		Апреля: 3,
		Мая: 4,
		Июня: 5,
		Июля: 6,
		Августа: 7,
		Сентября: 8,
		Октября: 9,
		Ноября: 10,
		Декабря: 11
	};

	const parseDate = (year, time) => {
		const [day, month] = time.split(' ');
		return new Date(+year, monthsMap[month], +day);
	};

	const getSortedReceptions = (receptionsObj, sortOrder = 'asc') => {
		const sortedYears = Object.keys(receptionsObj).sort((a, b) =>
			sortOrder === 'asc' ? a - b : b - a
		);

		return sortedYears.map(year => {
			const sortedItems = [...receptionsObj[year]].sort((a, b) => {
				const dateA = parseDate(year, a.time);
				const dateB = parseDate(year, b.time);
				return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
			});
			return [year, sortedItems];
		});
	};

	const baseSortedReceptions = getSortedReceptions(receptions, sort);

	const resReceptions = findMode
		? baseSortedReceptions.reduce((acc, [year, recs]) => {
				const filtered = recs.filter(reception =>
					reception.doctorProfession
						.toLowerCase()
						.includes(inputValue.toLowerCase())
				);
				if (filtered.length > 0) acc.push([year, filtered]);
				return acc;
		  }, [])
		: baseSortedReceptions;

	const modes = [
		{
			text: 'Приемы',
			action: () => setFindMode(true),
			icon: <Search className={styles['action-icon']} />
		},
		{
			text: 'Фильтры',
			action: () => setStage(0),
			actionText: 'Cбросить все'
		},
		{
			text: 'Специалисты',
			action: () => setStage(0),
			actionText: 'Cбросить все'
		}
	];
	const stageComponents = {
		0: <ReceptionsBlock receptions={resReceptions} />,
		1: <Filtrs onClick={setStage} />,
		2: <Specialists onClick={setStage} />
	};
	console.log(stage);
	return (
		<div className='container'>
			<div className={styles['controll-block']}>
				{!findMode && (
					<div className={styles['controll-row']}>
						<div className={styles['controll-prev']}>
							<div className={styles['prev']}>
								<PrevBtn
									onClick={
										stage === 0
											? () => navigate('/medicalCard')
											: () => setStage(prev => prev - 1)
									}
								/>
							</div>
							<div className={styles['text']}>{modes[stage]?.text}</div>
						</div>
						<div className={styles['action']} onClick={modes[stage]?.action}>
							{modes[stage]?.actionText ?? modes[stage]?.icon}
						</div>
					</div>
				)}

				{findMode && (
					<div className={styles['input-row']}>
						<Input
							value={inputValue}
							onChange={e => setInputValue(e.target.value)}
							className={styles['input-radius']}
						/>
						<div
							className={styles['clear-btn']}
							onClick={() => {
								setInputValue('');
								setFindMode(false);
							}}
						>
							<div>✖</div>
						</div>
					</div>
				)}

				{stage === 2 && (
					<div className={styles['input-row']}>
						<Input
							value={inputValue}
							placeholder='Найти специалиста'
							className={styles['input-radius']}
							onChange={e => setInputValue(e.target.value)}
						/>
					</div>
				)}

				{!findMode && stage === 0 && (
					<div className={styles['filtr-row']}>
						<div className={styles['action-row']}>
							<div
								className={styles['action-text']}
								onClick={() =>
									setSort(prev => (prev === 'asc' ? 'desc' : 'asc'))
								}
							>
								{sort === 'asc' ? 'Сначала старые' : 'Сначала новые'}
							</div>
							{/* <ChevronDown /> */}
						</div>

						<div className={styles['action-row']}>
							<div
								className={styles['action-text']}
								onClick={() => setStage(prev => prev + 1)}
							>
								Фильтры
							</div>
							<Filtr />
						</div>
					</div>
				)}
			</div>
			{stageComponents[stage]}
		</div>
	);
};
