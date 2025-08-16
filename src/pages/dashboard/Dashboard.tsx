// src/pages/dashboard/Dashboard.tsx
import { Box, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Flex, Icon } from '@chakra-ui/react';
import { Car, BarChart3, FileText, Ticket } from 'lucide-react';

export default function Dashboard() {
  return (
    <Box>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="6" mb="8">
        <Stat p="4" bg="blue.600" color="white" borderRadius="md">
          <Flex justify="space-between">
            <Box>
              <StatLabel>Vehículos Activos</StatLabel>
              <StatNumber>24</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" /> +2 este mes
              </StatHelpText>
            </Box>
            <Icon as={Car} boxSize="10" opacity="0.8" />
          </Flex>
        </Stat>

        <Stat p="4" bg="green.600" color="white" borderRadius="md">
          <Flex justify="space-between">
            <Box>
              <StatLabel>Ingresos</StatLabel>
              <StatNumber>$125,400</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" /> +15% vs mes anterior
              </StatHelpText>
            </Box>
            <Icon as={BarChart3} boxSize="10" opacity="0.8" />
          </Flex>
        </Stat>

        <Stat p="4" bg="yellow.600" color="white" borderRadius="md">
          <Flex justify="space-between">
            <Box>
              <StatLabel>Solicitudes</StatLabel>
              <StatNumber>8</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" /> 3 urgentes
              </StatHelpText>
            </Box>
            <Icon as={FileText} boxSize="10" opacity="0.8" />
          </Flex>
        </Stat>

        <Stat p="4" bg="red.600" color="white" borderRadius="md">
          <Flex justify="space-between">
            <Box>
              <StatLabel>Tickets</StatLabel>
              <StatNumber>3</StatNumber>
              <StatHelpText>
                <StatArrow type="decrease" /> 1 urgente
              </StatHelpText>
            </Box>
            <Icon as={Ticket} boxSize="10" opacity="0.8" />
          </Flex>
        </Stat>
      </SimpleGrid>

      <Box p="6" bg="gray.700" borderRadius="lg">
        <Box color="white" fontSize="lg" fontWeight="bold" mb="4">
          Bienvenido al Dashboard
        </Box>
        <Box color="gray.300">
          Aquí puedes monitorear el estado de tu flota, cuentas, mantenimientos y más.
        </Box>
      </Box>
    </Box>
  );
}
