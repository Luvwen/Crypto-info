import { Link as LinkRouter } from 'react-router-dom';
import { Link, Stack, Text } from '@chakra-ui/react';

export const NavbarListLinks = () => {
    return (
        <>
            <Stack as="ul" direction="row" listStyleType="none" spacing="5">
                <Link as={LinkRouter} to="/">
                    <Text as="li" cursor="pointer">
                        Criptomonedas
                    </Text>
                </Link>
                <Link as={LinkRouter} to="/">
                    <Text as="li" cursor="pointer">
                        Intercambios
                    </Text>
                </Link>
                <Link as={LinkRouter} to="/">
                    <Text as="li" cursor="pointer">
                        Comunidad
                    </Text>
                </Link>
                <Link as={LinkRouter} to="/">
                    <Text as="li" cursor="pointer">
                        Productos
                    </Text>
                </Link>
                <Link as={LinkRouter} to="/">
                    <Text as="li" cursor="pointer">
                        Aprender
                    </Text>
                </Link>
            </Stack>
            <Text cursor="pointer">Lista de seguimiento</Text>
        </>
    );
};
