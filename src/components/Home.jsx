import React, { useEffect, useState } from 'react';
import {
    Box,
    Heading,
    Image,
    Stack,
    Table,
    Tbody,
    Text,
    Th,
    Thead,
    Tr,
} from '@chakra-ui/react';

export const Home = () => {
    const [coins, setCoins] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const ENDPOINT =
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d';

    useEffect(() => {
        fetch(ENDPOINT)
            .then((response) => response.json())
            .then((data) => {
                setCoins(data);
                setIsFetching(false);
            });
    }, []);

    if (isFetching) return <Heading>Loading...</Heading>;
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
                            <Th textAlign="center">Acciones en circulación</Th>
                            <Th textAlign="center">Últimos 7 días</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {coins.map((coin, index) => (
                            <Tr key={index}>
                                <Th textAlign="center">{index}</Th>
                                <Th textAlign="center">
                                    <Stack
                                        alignItems="center"
                                        direction="row"
                                        spacing="3"
                                    >
                                        <Image
                                            height="25px"
                                            src={coin.image}
                                            width="25px"
                                        />
                                        <Text>
                                            {coin.id}{' '}
                                            <Text as="span" color="gray.400">
                                                {coin.symbol}
                                            </Text>
                                        </Text>
                                    </Stack>
                                </Th>
                                <Th textAlign="center">
                                    ${coin.current_price}
                                </Th>
                                <Th textAlign="center">
                                    {
                                        coin.price_change_percentage_1h_in_currency
                                    }
                                </Th>
                                <Th textAlign="center">
                                    {
                                        coin.price_change_percentage_24h_in_currency
                                    }
                                </Th>
                                <Th textAlign="center">
                                    {
                                        coin.price_change_percentage_7d_in_currency
                                    }
                                </Th>
                                <Th textAlign="center">${coin.market_cap}</Th>
                                <Th textAlign="center">
                                    {coin.circulating_supply}{' '}
                                    <Text as="span" color="gray.400">
                                        {coin.symbol}
                                    </Text>
                                </Th>
                                <Th textAlign="center">{index}</Th>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>
        </Stack>
    );
};
