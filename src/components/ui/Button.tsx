// src/components/ui/Button.tsx
import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <ChakraButton colorScheme="blue" {...props}>
      {children}
    </ChakraButton>
  );
};
