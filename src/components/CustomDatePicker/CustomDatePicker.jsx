import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TextField } from '@mui/material';

export const CustomDatePicker = ({ label, value, onChange, ...props }) => {
	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<DatePicker
				label={label || 'Выберите дату'}
				value={value}
				onChange={onChange}
				renderInput={params => <TextField {...params} fullWidth />}
				{...props}
			/>
		</LocalizationProvider>
	);
};
