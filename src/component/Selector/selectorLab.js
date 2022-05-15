import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLab(){
    const [lab,setLab] = React.useState('');

    const handleChange = (event) => {
        setLab(event.target.value);
    };

    return(
        <div>
            <FormControl variant="standard" sx={{m:1,minWidth:120}}>
                <InputLabel id="demo-simple-select-standard-label">Laboratorio</InputLabel>
                <Select
                    labelId='demo-simple-select-standard-label'
                    id='demo-simple-select-standard'
                    value={lab}
                    onChange={handleChange}
                    label='Laboratorio'
                >
                    <MenuItem value="">
                        <em>Seleccionar laboratorio</em>
                    </MenuItem>
                </Select>
            </FormControl>
        </div>

    );
}