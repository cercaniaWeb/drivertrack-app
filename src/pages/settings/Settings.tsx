// src/pages/settings/Settings.tsx
import { Box, Text } from '@chakra-ui/react';
import { Lock } from 'lucide-react';

export default function Settings() {
  return (
    <Box>
      <Box mb="6">
        <Box as="h1" fontSize="2xl" fontWeight="bold" color="white">
          Configuración
        </Box>
        <Box color="gray.400">Ajustes del sistema</Box>
      </Box>

      <Box bg="gray.700" p="12" borderRadius="lg" textAlign="center">
        <Lock size="48" color="#E53E3E" style={{ margin: '0 auto 1rem' }} />
        <Text fontSize="xl" fontWeight="bold" color="white">Acceso Denegado</Text>
        <Text color="gray.300">Solo el dueño puede acceder a esta sección</Text>
      </Box>
    </Box>
  );
}
