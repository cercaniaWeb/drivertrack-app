// src/pages/profile/Profile.tsx
import { Box, Button, Input, FormControl, FormLabel } from '@chakra-ui/react';
import { UserCircle } from 'lucide-react';

export default function Profile() {
  return (
    <Box>
      <Box mb="6">
        <Box as="h1" fontSize="2xl" fontWeight="bold" color="white">
          Mi Perfil
        </Box>
        <Box color="gray.400">Actualiza tu información personal</Box>
      </Box>

      <Box maxW="md">
        <FormControl mb="4">
          <FormLabel color="gray.200">Nombre</FormLabel>
          <Input bg="white" defaultValue="Carlos Méndez" />
        </FormControl>
        <FormControl mb="4">
          <FormLabel color="gray.200">Correo</FormLabel>
          <Input bg="white" defaultValue="carlos@drivertrack.com" />
        </FormControl>
        <FormControl mb="6">
          <FormLabel color="gray.200">Teléfono</FormLabel>
          <Input bg="white" defaultValue="555-1234" />
        </FormControl>
        <Button colorScheme="blue">Guardar Cambios</Button>
      </Box>
    </Box>
  );
}
