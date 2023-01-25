import React from 'react';
import { Box, Stack, Table, Tbody, Th, Thead, Tr } from '@chakra-ui/react';

export const Home = () => {
    const criptos = [
        'bitcoin',
        'ethereum',
        'dogecoin',
        'akiba-inu',
        'Wrapped Bitcoin',
        'PAX Gold',
        'Maker',
        'BNB',
        'Monero',
        'Quant',
    ];
    return (
        <Stack minHeight="100vh" minWidth="100vw">
            <Box margin="100px auto 0" width="70vw">
                <Table>
                    <Thead>
                        <Tr>
                            <Th textAlign="center">#</Th>
                            <Th textAlign="center">Nombre</Th>
                            <Th textAlign="center">Precio</Th>
                            <Th textAlign="center">1h%</Th>
                            <Th textAlign="center">24h%</Th>
                            <Th textAlign="center">7d%</Th>
                            <Th textAlign="center">Cap. de Mercado</Th>
                            <Th textAlign="center">Volumen (24h)</Th>
                            <Th textAlign="center">Acciones en circulación</Th>
                            <Th textAlign="center">Últimos 7 días</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {criptos.map((cripto, index) => (
                            <Tr key={index}>
                                <Th textAlign="center">{cripto}</Th>
                                <Th textAlign="center">{cripto}</Th>
                                <Th textAlign="center">{cripto}</Th>
                                <Th textAlign="center">{cripto}</Th>
                                <Th textAlign="center">{cripto}</Th>
                                <Th textAlign="center">{cripto}</Th>
                                <Th textAlign="center">{cripto}</Th>
                                <Th textAlign="center">{cripto}</Th>
                                <Th textAlign="center">{cripto}</Th>
                                <Th textAlign="center">{cripto}</Th>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>
        </Stack>
    );
};
