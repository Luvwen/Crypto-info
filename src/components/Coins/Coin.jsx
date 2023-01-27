import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Loading } from '../Loading';
import { Sidebar } from './Sidebar';

export const Coin = () => {
    const [coin, setCoin] = useState({});
    const [isFetching, setIsFetching] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/${id}?localization=false`)
            .then((response) => response.json())
            .then((data) => setCoin(data), setIsFetching(false))
            .catch((err) => console.log(err));
    }, [id]);
    console.log(coin);
    if (isFetching) return <Loading />;

    let idToUppercase;
    if (coin.id) {
        idToUppercase = coin.id.charAt(0).toUpperCase() + coin.id.slice(1);
    }
    return (
        <Box as="main" height="100vh" ml="25vw" width="calc(75vw - 25vw)">
            <Stack as="section" mt="25px" spacing="5">
                <Heading as="h2">{idToUppercase}</Heading>
                <Divider height="1px" width="50vw" />
                <Stack direction="row" spacing="5">
                    <Image
                        alt={idToUppercase + ' icon'}
                        height="80px"
                        src={coin.image?.large}
                        width="80px"
                    />
                    <Stack spacing="0">
                        <Text>1 {coin.symbol?.toUpperCase() + ' ='}</Text>
                        <Text fontSize="3xl" fontWeight="bold">
                            $
                            {coin.market_data?.current_price?.usd?.toLocaleString(
                                2
                            )}
                        </Text>
                    </Stack>
                </Stack>
                <Divider height="1px" width="50vw" />
                <Stack direction="row" spacing="64">
                    <Stack width="400px">
                        <Stack alignItems="center" direction="row">
                            <Text whiteSpace="nowrap">Market Cap</Text>
                            <Divider bg="gray.400" height="1px" width="2xl" />
                            <Text whiteSpace="nowrap">
                                $
                                {coin?.market_data?.market_cap?.usd?.toLocaleString(
                                    2
                                )}
                            </Text>
                        </Stack>
                        <Stack alignItems="center" direction="row">
                            <Text whiteSpace="nowrap">Circulating Supply</Text>
                            <Divider bg="gray.400" height="1px" width="2xl" />
                            <Text whiteSpace="nowrap">
                                ${coin?.symbol?.toUpperCase() + ' '}
                                {coin?.market_data?.circulating_supply?.toLocaleString(
                                    2
                                )}
                            </Text>
                        </Stack>
                        <Stack alignItems="center" direction="row">
                            <Text whiteSpace="nowrap">Max Supply</Text>
                            <Divider bg="gray.400" height="1px" width="2xl" />
                            <Text whiteSpace="nowrap">
                                ${coin?.symbol?.toUpperCase() + ' '}
                                {coin?.market_data?.max_supply?.toLocaleString(
                                    2
                                )}
                            </Text>
                        </Stack>
                        <Stack alignItems="center" direction="row">
                            <Text whiteSpace="nowrap">Vol (24H)</Text>
                            <Divider bg="gray.400" height="1px" width="2xl" />
                            <Text whiteSpace="nowrap">
                                $
                                {coin?.market_data?.high_24h?.usd?.toLocaleString(
                                    2
                                )}
                                B
                            </Text>
                        </Stack>
                        <Stack alignItems="center" direction="row">
                            <Text whiteSpace="nowrap">Change (7D)</Text>
                            <Divider bg="gray.400" height="1px" width="2xl" />
                            <Text
                                color={
                                    coin?.market_data
                                        ?.price_change_percentage_7d > 0
                                        ? 'green'
                                        : 'red'
                                }
                                whiteSpace="nowrap"
                            >
                                <Text as="span" whiteSpace="nowrap">
                                    {coin?.market_data
                                        ?.price_change_percentage_7d > 0 && '+'}
                                </Text>
                                {coin?.market_data?.price_change_percentage_7d}
                            </Text>
                        </Stack>
                    </Stack>
                    <Stack border="1px solid #dadada" borderRadius="10px">
                        <Sidebar />
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    );
};
