// src/pages/drivers/Drivers.tsx
import { Box, Table, Thead, Tbody, Tr, Th, Td, Badge, IconButton } from '@chakra-ui/react';
import { Users, Edit, Trash2 } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { User } from '../../types';

const mockDrivers: User[] = [
  { id: '1', email: 'carlos@drivertrack.com', name: 'Carlos Méndez', role: 'conductor', vehicleId: '1', avatar: '' },
];

export default function Drivers() {
  const { currentUser } = useAuth();

  return (
    <Box>
      <Box mb="6" display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Box as="h1" fontSize="2xl" fontWeight="bold" color="white">
            Conductores
          </Box>
          <Box color="gray.400">Gestiona a tus conductores</Box>
        </Box>
        {currentUser?.role !== 'conductor' && (
          <IconButton icon={<Users />} aria-label="Nuevo conductor" colorScheme="blue" />
        )}
      </Box>

      <Table variant="simple" colorScheme="whiteAlpha">
        <Thead>
          <Tr>
            <Th color="gray.300">Nombre</Th>
            <Th color="gray.300">Correo</Th>
            <Th color="gray.300">Vehículo</Th>
            <Th color="gray.300">Estado</Th>
            <Th color="gray.300">Acciones</Th>
          </Tr>
        </Thead>
        <Tbody>
          {mockDrivers.map((d) => (
            <Tr key={d.id}>
              <Td color="white">{d.name}</Td>
              <Td color="white">{d.email}</Td>
              <Td color="white">{d.vehicleId ? `Vehículo ${d.vehicleId}` : 'Sin asignar'}</Td>
              <Td>
                <Badge colorScheme="green">Activo</Badge>
              </Td>
              <Td>
                <IconButton icon={<Edit />} aria-label="Editar" size="sm" mr="2" />
                <IconButton icon={<Trash2 />} aria-label="Eliminar" size="sm" colorScheme="red" />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
