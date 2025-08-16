// src/pages/reports/Reports.tsx
import { Box, Button } from '@chakra-ui/react';
import { Download } from 'lucide-react';

export default function Reports() {
  return (
    <Box>
      <Box mb="6" display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Box as="h1" fontSize="2xl" fontWeight="bold" color="white">
            Reportes
          </Box>
          <Box color="gray.400">Genera informes detallados</Box>
        </Box>
        <Button leftIcon={<Download />} colorScheme="blue">
          Generar Reporte
        </Button>
      </Box>

      <Box bg="gray.700" p="12" borderRadius="lg" textAlign="center">
        <Text color="white">Funcionalidad de reportes en desarrollo</Text>
      </Box>
    </Box>
  );
}
