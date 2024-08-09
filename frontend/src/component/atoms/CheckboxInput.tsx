import { FormControlLabel, Checkbox } from '@mui/material';
import { CheckboxInputProps } from '../../types/CheckboxInputProps';

const CheckboxInput = ({ label, name, checked, onChange }: CheckboxInputProps) => {
  return (
    <FormControlLabel
      control={<Checkbox checked={checked} onChange={onChange} name={name} />}
      label={label}
    />
  );
};

export default CheckboxInput;
