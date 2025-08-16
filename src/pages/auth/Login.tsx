// src/pages/auth/Login.tsx
import { Button, Input, FormControl, FormLabel, Box, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("¡Bienvenido!");
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <Box p={6} maxW="md" mx="auto">
      <Heading mb={6}>Iniciar Sesión</Heading>
      <FormControl mb={4}>
        <FormLabel>Email</FormLabel>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Contraseña</FormLabel>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </FormControl>
      <Button colorScheme="brand" onClick={handleLogin}>Entrar</Button>
    </Box>
  );
};

export default Login;
