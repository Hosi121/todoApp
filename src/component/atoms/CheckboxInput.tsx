import React from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';

type CheckboxInputProps = {
  label: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckboxInput = ({ label, name, checked, onChange }: CheckboxInputProps) => {
  return (
    <FormControlLabel
      control={<Checkbox checked={checked} onChange={onChange} name={name} />}
      label={label}
    />
  );
};

export default CheckboxInput;
