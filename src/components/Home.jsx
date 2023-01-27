import React, { useEffect, useState } from 'react';
import { Box, Stack, Table } from '@chakra-ui/react';
import { Loading } from './Loading';
import { TableCoins } from './Coins/TableCoins';
import { TableTitles } from './Coins/TableTitles';

export const Home = () => {
    const [coins, setCoins] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const ENDPOINT =
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d';

    useEffect(() => {
        fetch(ENDPOINT)
            .then((response) => response.json())
            .then((data) => {
                setIsFetching(true);
                setCoins(data);
                setIsFetching(false);
            });
    }, []);

    if (isFetching) return <Loading />;

    return (
        <Stack minHeight="100vh" minWidth="100vw">
            <Box margin="100px auto 0" width="70vw">
                <Table>
                    <TableTitles />
                    <TableCoins coins={coins} />
                </Table>
            </Box>
        </Stack>
    );
};
