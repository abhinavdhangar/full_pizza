import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Productcontext } from '../../context/Productcontext';

export default function SelectSmall() {
  const [age, setAge] = React.useState('');
  const {shippingSubDivisions,shippingCountry} = React.useContext(Productcontext)
  console.log(shippingCountry)
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Age</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
    {shippingSubDivisions&& shippingSubDivisions.map(subdivision=>(
      <MenuItem key={subdivision.id} value={subdivision.id}>
        {subdivision.label}
      </MenuItem>
    ))}
      </Select>
    </FormControl>
  );
}
