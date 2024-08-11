import { TextField } from '@mui/material';
import { TextInputProps } from '../../types/TextInputProps';

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
