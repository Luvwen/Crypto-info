import { Box, Input, Link, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';

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
            <Link as={LinkRouter} to="/">
                <Stack cursor="pointer" direction="row">
                    <Text>Icono</Text>
                    <Text>Luvwen market cap</Text>
                </Stack>
            </Link>
            <Stack as="ul" direction="row" listStyleType="none" spacing="5">
                <Text as="li" cursor="pointer">
                    Criptomonedas
                </Text>
                <Text as="li" cursor="pointer">
                    Intercambios
                </Text>
                <Text as="li" cursor="pointer">
                    Comunidad
                </Text>
                <Text as="li" cursor="pointer">
                    Productos
                </Text>
                <Text as="li" cursor="pointer">
                    Aprender
                </Text>
            </Stack>
            <Text cursor="pointer">Lista de seguimiento</Text>
            <Input placeholder="Buscar divisas" width="15vw" />
        </Box>
    );
};
