// src/components/ui/Input.tsx
import { Input as ChakraInput, FormLabel, FormControl } from '@chakra-ui/react';

interface InputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
}

export const Input = ({ label, value, onChange, type = 'text', placeholder }: InputProps) => {
  return (
    <FormControl mb="4">
      <FormLabel color="gray.200">{label}</FormLabel>
      <ChakraInput
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        bg="white"
      />
    </FormControl>
  );
};
