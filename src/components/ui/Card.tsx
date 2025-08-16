// src/components/ui/Card.tsx
import { Box, Heading, Text } from '@chakra-ui/react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
}

export const Card = ({ title, children }: CardProps) => {
  return (
    <Box bg="gray.800" p="6" borderRadius="lg" border="1px" borderColor="gray.700">
      {title && (
        <Heading size="md" color="white" mb="4">
          {title}
        </Heading>
      )}
      {children}
    </Box>
  );
};
