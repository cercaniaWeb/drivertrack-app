// src/pages/accounts/Accounts.tsx
import { Box, Table, Thead, Tbody, Tr, Th, Td, Badge, Button } from '@chakra-ui/react';
import { Wallet, Download } from 'lucide-react';
import { Account } from '../../types';

const mockAccounts: Account[] = [
  { id: 1, driverId: 1, driver: 'Carlos Méndez', income: 5000, rent: 1700, expenses: 800, balance: 2500, previousDebt: 0, total: 2500, status: 'paid', paymentEvidence: null, week: '2024-05-10' },
];

export default function Accounts() {
  return (
    <Box>
      <Box mb="6" display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Box as="h1" fontSize="2xl" fontWeight="bold" color="white">
            Cuentas Semanales
          </Box>
          <Box color="gray.400">Gestiona los pagos y deducciones</Box>
        </Box>
        <Button leftIcon={<Download />} colorScheme="blue">
          Exportar
        </Button>
      </Box>

      <Table variant="simple" colorScheme="whiteAlpha">
        <Thead>
          <Tr>
            <Th color="gray.300">Conductor</Th>
            <Th color="gray.300">Semana</Th>
            <Th color="gray.300">Total</Th>
            <Th color="gray.300">Estado</Th>
            <Th color="gray.300">Acciones</Th>
          </Tr>
        </Thead>
        <Tbody>
          {mockAccounts.map((a) => (
            <Tr key={a.id}>
              <Td color="white">{a.driver}</Td>
              <Td color="white">{a.week}</Td>
              <Td color="white">${a.total}</Td>
              <Td>
                <Badge colorScheme={a.status === 'paid' ? 'green' : a.status === 'partial' ? 'yellow' : 'red'}>
                  {a.status === 'paid' ? 'Pagado' : a.status === 'partial' ? 'Parcial' : 'Pendiente'}
                </Badge>
              </Td>
              <Td>
                <Button size="sm" colorScheme="blue">Ver</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
