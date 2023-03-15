import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box className="FormControl">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Affilation</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Affilaiton"
          onChange={handleChange}
        >

        </Select>
      </FormControl>
    </Box>
  );
}
