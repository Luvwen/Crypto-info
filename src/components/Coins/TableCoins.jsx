import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Image, Link, Stack, Tbody, Text, Th, Tr } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

export const TableCoins = ({ coins }) => {
    const [favorites, setFavorites] = useState(() => {
        const favsFromStorage = localStorage.getItem('favorites');
        if (favsFromStorage) return JSON.parse(favsFromStorage);
        return [];
    });
    const handleAddFavs = (index) => () => {
        setFavorites((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    return (
        <Tbody>
            {coins?.map((coin, index) => {
                return (
                    <Tr key={index}>
                        <Th textAlign="center">
                            <StarIcon
                                color={favorites[index] ? 'orange' : 'gray'}
                                cursor="pointer"
                                onClick={handleAddFavs(index)}
                            />
                        </Th>
                        <Th textAlign="center">{index}</Th>
                        <Th textAlign="center">
                            <Link as={RouterLink} to={`/coins/${coin.id}`}>
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
                            </Link>
                        </Th>
                        <Th textAlign="center">${coin.current_price}</Th>
                        <Th
                            color={
                                coin.price_change_percentage_1h_in_currency > 0
                                    ? 'green'
                                    : 'red'
                            }
                            textAlign="center"
                        >
                            {coin.price_change_percentage_1h_in_currency.toFixed(
                                2
                            )}
                        </Th>
                        <Th
                            color={
                                coin.price_change_percentage_24h_in_currency > 0
                                    ? 'green'
                                    : 'red'
                            }
                            textAlign="center"
                        >
                            {coin.price_change_percentage_24h_in_currency.toFixed(
                                2
                            )}
                        </Th>
                        <Th
                            color={
                                coin.price_change_percentage_7d_in_currency > 0
                                    ? 'green'
                                    : 'red'
                            }
                            textAlign="center"
                        >
                            {coin.price_change_percentage_7d_in_currency.toFixed(
                                2
                            )}
                        </Th>
                        <Th textAlign="center">
                            ${coin.market_cap.toLocaleString('en')}
                        </Th>
                        <Th textAlign="center">
                            {coin.circulating_supply.toLocaleString('en')}{' '}
                            <Text as="span" color="gray.400">
                                {coin.symbol}
                            </Text>
                        </Th>
                        <Th textAlign="center">{index}</Th>
                    </Tr>
                );
            })}
        </Tbody>
    );
};
