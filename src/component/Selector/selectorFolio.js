import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectFolio(){
    const [folio,setFolio] = React.useState('');

    const handleChange = (event) => {
        setFolio(event.target.value);
    };

    return(
        <div>
            <FormControl variant="standard" sx={{m:1,minWidth:120}}>
                <InputLabel id="demo-simple-select-standard-label">Folio</InputLabel>
                <Select
                    labelId='demo-simple-select-standard-label'
                    id='demo-simple-select-standard'
                    value={folio}
                    onChange={handleChange}
                    label='Folio'
                >
                    <MenuItem value="">
                        <em>Selecciona el folio</em>
                    </MenuItem>
                </Select>
            </FormControl>
        </div>

    );
}