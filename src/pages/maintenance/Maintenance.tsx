// src/pages/maintenance/Maintenance.tsx
import { Box, Table, Thead, Tbody, Tr, Th, Td, Badge, IconButton } from '@chakra-ui/react';
import { Wrench, Plus } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { MaintenanceTask } from '../../types';

const mockTasks: MaintenanceTask[] = [
  { id: 1, vehicleId: 1, vehicle: 'ABC-123', task: 'Cambio de aceite', dueDate: '2024-06-15', priority: 'high', assignedTo: 'Carlos Méndez' },
];

export default function Maintenance() {
  const { currentUser } = useAuth();

  return (
    <Box>
      <Box mb="6" display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Box as="h1" fontSize="2xl" fontWeight="bold" color="white">
            Mantenimiento
          </Box>
          <Box color="gray.400">Programa y monitorea servicios</Box>
        </Box>
        {currentUser?.role !== 'conductor' && (
          <IconButton icon={<Plus />} aria-label="Nuevo mantenimiento" colorScheme="blue" />
        )}
      </Box>

      <Table variant="simple" colorScheme="whiteAlpha">
        <Thead>
          <Tr>
            <Th color="gray.300">Vehículo</Th>
            <Th color="gray.300">Tarea</Th>
            <Th color="gray.300">Fecha</Th>
            <Th color="gray.300">Prioridad</Th>
            <Th color="gray.300">Asignado</Th>
          </Tr>
        </Thead>
        <Tbody>
          {mockTasks.map((t) => (
            <Tr key={t.id}>
              <Td color="white">{t.vehicle}</Td>
              <Td color="white">{t.task}</Td>
              <Td color="white">{t.dueDate}</Td>
              <Td>
                <Badge colorScheme={t.priority === 'high' ? 'red' : t.priority === 'medium' ? 'yellow' : 'green'}>
                  {t.priority}
                </Badge>
              </Td>
              <Td color="white">{t.assignedTo}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
