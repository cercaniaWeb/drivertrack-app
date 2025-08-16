// src/pages/tickets/Tickets.tsx
import { Box, Table, Thead, Tbody, Tr, Th, Td, Badge, IconButton } from '@chakra-ui/react';
import { Ticket, Eye } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { Ticket as TicketType } from '../../types';

const mockTickets: TicketType[] = [
  { id: '1', driverId: '1', driver: 'Carlos Méndez', type: 'Mecánico', severity: 'high', description: 'Problema con transmisión', status: 'pending', date: '2024-05-21', ticketId: 'TKT-001' },
];

export default function Tickets() {
  const { currentUser } = useAuth();

  return (
    <Box>
      <Box mb="6" display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Box as="h1" fontSize="2xl" fontWeight="bold" color="white">
            Mesa de Soluciones
          </Box>
          <Box color="gray.400">Gestiona los reportes de problemas</Box>
        </Box>
        {currentUser?.role === 'conductor' && (
          <IconButton icon={<Ticket />} aria-label="Nuevo ticket" colorScheme="blue" />
        )}
      </Box>

      <Table variant="simple" colorScheme="whiteAlpha">
        <Thead>
          <Tr>
            <Th color="gray.300">ID</Th>
            <Th color="gray.300">Conductor</Th>
            <Th color="gray.300">Tipo</Th>
            <Th color="gray.300">Estado</Th>
            <Th color="gray.300">Acciones</Th>
          </Tr>
        </Thead>
        <Tbody>
          {mockTickets.map((t) => (
            <Tr key={t.id}>
              <Td color="white">{t.ticketId}</Td>
              <Td color="white">{t.driver}</Td>
              <Td color="white">{t.type}</Td>
              <Td>
                <Badge colorScheme={
                  t.status === 'pending' ? 'red' :
                  t.status === 'in-progress' ? 'yellow' : 'green'
                }>
                  {t.status === 'pending' ? 'Pendiente' : t.status === 'in-progress' ? 'En Progreso' : 'Resuelto'}
                </Badge>
              </Td>
              <Td>
                <IconButton icon={<Eye />} aria-label="Ver" size="sm" />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
