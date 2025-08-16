// src/pages/calendar/Calendar.tsx
import { Box, Text } from '@chakra-ui/react';
import { Calendar as CalendarIcon } from 'lucide-react';

export default function Calendar() {
  return (
    <Box>
      <Box mb="6">
        <Box as="h1" fontSize="2xl" fontWeight="bold" color="white">
          Calendario
        </Box>
        <Box color="gray.400">Vista general de eventos y mantenimientos</Box>
      </Box>
      <Box bg="gray.700" p="12" borderRadius="lg" textAlign="center">
        <CalendarIcon size="48" color="#805AD5" style={{ margin: '0 auto 1rem' }} />
        <Text color="white">Calendario en desarrollo</Text>
      </Box>
    </Box>
  );
}
