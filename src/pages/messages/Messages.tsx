// src/pages/messages/Messages.tsx
import { Box, List, ListItem, Text, Badge } from '@chakra-ui/react';
import { MessageCircle } from 'lucide-react';

export default function Messages() {
  return (
    <Box>
      <Box mb="6">
        <Box as="h1" fontSize="2xl" fontWeight="bold" color="white">
          Mensajes
        </Box>
        <Box color="gray.400">Comunicación interna</Box>
      </Box>

      <List spacing="3">
        <ListItem p="4" bg="gray.700" borderRadius="md">
          <Text fontWeight="bold" color="white">Administrador</Text>
          <Text color="gray.300" mb="2">Recordatorio: Cierre de cuentas este lunes</Text>
          <Badge colorScheme="blue">Hoy</Badge>
        </ListItem>
      </List>
    </Box>
  );
}
