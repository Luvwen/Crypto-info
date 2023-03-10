import { Th, Thead, Tr } from '@chakra-ui/react';

export const TableTitles = () => {
    const COLUMN_INFO = [
        'Fav',
        '#',
        'Nombre',
        'Precio',
        '1h%',
        '24h%',
        '7d%',
        'Cap de Mercado',
        'Acciones en circulación',
        'Últimos 7 días',
    ];
    return (
        <Thead>
            <Tr>
                {COLUMN_INFO.map((column, index) => (
                    <Th key={index} textAlign="center">
                        {column}
                    </Th>
                ))}
            </Tr>
        </Thead>
    );
};
