import { Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';

export const TableTitles = () => {
    return (
        <Thead>
            <Tr>
                <Th textAlign="center">#</Th>
                <Th textAlign="center">Nombre</Th>
                <Th textAlign="center">Precio</Th>
                <Th textAlign="center">1h%</Th>
                <Th textAlign="center">24h%</Th>
                <Th textAlign="center">7d%</Th>
                <Th textAlign="center">Cap. de Mercado</Th>
                <Th textAlign="center">Acciones en circulación</Th>
                <Th textAlign="center">Últimos 7 días</Th>
            </Tr>
        </Thead>
    );
};
