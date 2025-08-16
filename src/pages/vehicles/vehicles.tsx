// src/pages/vehicles/Vehicles.tsx
import { Box, Table, Thead, Tbody, Tr, Th, Td, Badge, IconButton } from '@chakra-ui/react';
import { Car, Edit, Trash2 } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { Vehicle } from '../../types';

// Mock data (reemplaza con Firestore)
const mockVehicles: Vehicle[] = [
  {
    id: '1',
    plate: 'ABC-123',
    model: 'Toyota Hilux',
    year: 2020,
    status: 'active',
    driverId: '1',
    driver: 'Carlos Méndez',
    image: '',
  },
];

export default function Vehicles() {
  const { currentUser } = useAuth();

  return (
    <Box>
      <Box mb="6" display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Box as="h1" fontSize="2xl" fontWeight="bold" color="white">
            Vehículos
          </Box>
          <Box color="gray.400">Gestiona tu flotilla de vehículos</Box>
        </Box>
        {currentUser?.role !== 'conductor' && (
          <IconButton icon={<Car />} aria-label="Nuevo vehículo" colorScheme="blue" />
        )}
      </Box>

      <Table variant="simple" colorScheme="whiteAlpha">
        <Thead>
          <Tr>
            <Th color="gray.300">Placa</Th>
            <Th color="gray.300">Modelo</Th>
            <Th color="gray.300">Conductor</Th>
            <Th color="gray.300">Estado</Th>
            <Th color="gray.300">Acciones</Th>
          </Tr>
        </Thead>
        <Tbody>
          {mockVehicles.map((v) => (
            <Tr key={v.id}>
              <Td color="white">{v.plate}</Td>
              <Td color="white">{v.model} ({v.year})</Td>
              <Td color="white">{v.driver}</Td>
              <Td>
                <Badge
                  colorScheme={
                    v.status === 'active' ? 'green' :
                    v.status === 'maintenance' ? 'yellow' : 'red'
                  }
                >
                  {v.status === 'active' ? 'Activo' : v.status === 'maintenance' ? 'Mantenimiento' : 'Inactivo'}
                </Badge>
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
