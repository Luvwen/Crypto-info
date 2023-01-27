import React, { useEffect, useState } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { Heading, Image, Link, Spinner, Stack, Text } from '@chakra-ui/react';

export const Sidebar = () => {
    const [firstFiveCoins, setFirstFiveCoins] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    const { id } = useParams();
    useEffect(() => {
        setIsFetching(true);
        fetch(
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d'
        )
            .then((response) => response.json())
            .then(
                (data) =>
                    setFirstFiveCoins(data.filter((coin) => coin.id !== id)),
                setIsFetching(false)
            )
            .catch((err) => console.log(err));
    }, [id]);

    return (
        <Stack
            alignItems={isFetching ? 'center' : ''}
            as="article"
            justifyContent={isFetching ? 'center' : ''}
            minWidth="300px"
        >
            <Heading fontSize="md" ml="15px" p="10px 10px 2px">
                Leading Cryptocurrencies
            </Heading>
            <Stack p="0 15px 5px">
                {isFetching && <Spinner />}
                {firstFiveCoins.map((coin, index) => {
                    return (
                        <>
                            {index <= 4 && (
                                <Stack
                                    borderBottom={
                                        index < 4 && '1px solid #dadada'
                                    }
                                    borderTop={
                                        index === 0 && '1px solid #dadada'
                                    }
                                    direction="row"
                                    justifyContent="space-between"
                                    key={index}
                                    pt={index === 0 && '5px'}
                                >
                                    <Stack direction="row">
                                        <Image
                                            alt={coin.name + ' icon'}
                                            height="25px"
                                            src={coin.image}
                                            width="25px"
                                        />
                                        <Stack spacing="1">
                                            <Link
                                                as={RouterLink}
                                                to={`/coins/${coin.id}`}
                                            >
                                                <Text color="#0EA5E9">
                                                    {coin.name}
                                                </Text>
                                            </Link>
                                            <Text color="#7E8A9B">
                                                {coin.symbol.toUpperCase()}
                                            </Text>
                                        </Stack>
                                    </Stack>
                                    <Stack
                                        alignItems="end"
                                        pb="5px"
                                        spacing="1"
                                    >
                                        <Text fontWeight="bold">
                                            $
                                            {coin.current_price.toLocaleString(
                                                2
                                            )}
                                        </Text>
                                        <Text
                                            color={
                                                coin.price_change_percentage_24h_in_currency >
                                                0
                                                    ? 'green'
                                                    : 'red'
                                            }
                                        >
                                            {coin.price_change_percentage_24h_in_currency >
                                                0 && '+'}
                                            {coin.price_change_percentage_24h_in_currency.toFixed(
                                                2
                                            )}
                                            %
                                        </Text>
                                    </Stack>
                                </Stack>
                            )}
                        </>
                    );
                })}
            </Stack>
        </Stack>
    );
};
