import React from 'react';
import { TextField } from '@mui/material';

type TextInputProps = {
  label: string;
  name: string;
  value: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput = ({ label, name, value, type = 'text', onChange }: TextInputProps) => {
  return (
    <TextField
      label={label}
      name={name}
      value={value}
      type={type}
      onChange={onChange}
      fullWidth
      margin="normal"
    />
  );
};

export default TextInput;
