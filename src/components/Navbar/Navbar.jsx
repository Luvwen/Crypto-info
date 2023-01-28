import { Box, Input } from '@chakra-ui/react';
import { LogoIcon } from './LogoIcon';
import { NavbarListLinks } from './NavbarListLinks';

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
            <LogoIcon />
            <NavbarListLinks />
            <Input placeholder="Buscar divisas" width="15vw" />
        </Box>
    );
};
