import {
  FormControl,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
  Select as SelectMUI
} from '@mui/material';

import { DefaultProps } from '@/types/services/search';

type Props = {
  options: DefaultProps[];
  label: string;
  value: string;
  setValue: (value: string) => void;
};

export function Select({ options, label, value, setValue }: Props) {
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <SelectMUI
        value={value}
        label={label}
        disabled={options.length === 0}
        onChange={handleChange}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: 200
            }
          }
        }}
      >
        {options &&
          options.map((option) => (
            <MenuItem key={option.codigo} value={option.codigo}>
              {option.nome}
            </MenuItem>
          ))}
      </SelectMUI>
    </FormControl>
  );
}
