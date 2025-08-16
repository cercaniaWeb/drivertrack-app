// src/components/layout/Sidebar.tsx
import { Box, Flex, Icon, Link, List, ListItem, Text } from '@chakra-ui/react';
import { Home, Car, Users, Wallet, Wrench, Calendar, Ticket, MessageCircle, FileText, Settings, LogOut } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const menuItems = [
  { icon: Home, label: 'Dashboard', path: '/' },
  { icon: Car, label: 'Vehículos', path: '/vehicles' },
  { icon: Users, label: 'Conductores', path: '/drivers' },
  { icon: Wallet, label: 'Cuentas', path: '/accounts' },
  { icon: Wrench, label: 'Mantenimiento', path: '/maintenance' },
  { icon: Calendar, label: 'Calendario', path: '/calendar' },
  { icon: Ticket, label: 'Tickets', path: '/tickets' },
  { icon: MessageCircle, label: 'Mensajes', path: '/messages' },
  { icon: FileText, label: 'Reportes', path: '/reports' },
  { icon: Settings, label: 'Configuración', path: '/settings' },
];

export default function Sidebar() {
  return (
    <Box w="64" h="full" bg="gray.800" borderRight="1px" borderColor="gray.700" p="4">
      <Text fontSize="xl" fontWeight="bold" color="white" mb="6">
        DriverTrack
      </Text>
      <List spacing="2">
        {menuItems.map((item) => (
          <ListItem key={item.path}>
            <Link
              as={NavLink}
              to={item.path}
              p="3"
              borderRadius="md"
              display="flex"
              alignItems="center"
              color="gray.300"
              _hover={{ bg: 'blue.600', color: 'white' }}
              _activeLink={{ bg: 'blue.700', color: 'white' }}
            >
              <Icon as={item.icon} boxSize="5" mr="3" />
              <Text>{item.label}</Text>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
