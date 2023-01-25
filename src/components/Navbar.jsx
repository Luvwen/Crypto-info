import { Box, Input, Stack, Text } from '@chakra-ui/react';
import React from 'react';

export const Navbar = () => {
    return (
        <Box
            alignItems="center"
            display="flex"
            height="5vh"
            justifyContent="space-evenly"
            margin="0 auto"
            width="75vw"
        >
            <Stack direction="row">
                <Text>Icono</Text>
                <Text>Luvwen market cap</Text>
            </Stack>
            <Stack direction="row" spacing="5">
                <Text>Criptomonedas</Text>
                <Text>Intercambios</Text>
                <Text>Comunidad</Text>
                <Text>Productos</Text>
                <Text>Aprender</Text>
            </Stack>
            <Text>Lista de seguimiento</Text>
            <Input placeholder="Buscar divisas" width="15vw" />
        </Box>
    );
};
