import { Link as LinkRouter } from 'react-router-dom';
import { Link, Stack, Text } from '@chakra-ui/react';

export const LogoIcon = () => {
    return (
        <Link as={LinkRouter} to="/">
            <Stack cursor="pointer" direction="row">
                <Text>Icono</Text>
                <Text>Luvwen market cap</Text>
            </Stack>
        </Link>
    );
};
