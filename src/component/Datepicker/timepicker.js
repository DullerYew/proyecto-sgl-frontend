import React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';


export default function MaterialUIPickers() {
    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
    };

    return(
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
            label="Hora"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    );

}