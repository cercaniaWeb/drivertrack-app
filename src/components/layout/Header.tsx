// src/components/layout/Header.tsx
import { Box, Flex, IconButton, Text, Avatar, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { Bell, Menu as MenuIcon } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

export default function Header() {
  const { currentUser } = useAuth();

  return (
    <Box bg="gray.800" borderBottom="1px" borderColor="gray.700" px="6" py="4">
      <Flex justify="space-between" align="center">
        <IconButton icon={<MenuIcon />} aria-label="Menu" variant="ghost" color="white" />
        <Text fontSize="lg" fontWeight="bold" color="white">
          DriverTrack
        </Text>
        <Flex align="center" gap="4">
          <IconButton icon={<Bell />} aria-label="Notifications" variant="ghost" color="white" />
          <Menu>
            <MenuButton as={Avatar} size="sm" name={currentUser?.displayName || 'User'} />
            <MenuList>
              <MenuItem>Perfil</MenuItem>
              <MenuItem>Salir</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
}
