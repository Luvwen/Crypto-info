import { Fragment, useEffect, useState } from 'react';
import { Divider, Heading, Image, Link, Stack, Text } from '@chakra-ui/react';
import { Loading } from '../../components/Loading';

export const CoinNews = ({ coinName }) => {
    const [newsData, setNewsData] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    const options = {
        method: 'GET',
        headers: {
            'X-BingApis-SDK': 'true',
            'X-RapidAPI-Key': import.meta.env.VITE_COIN_API_KEY,
            'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
        },
    };

    const BASE_URL = 'https://bing-news-search1.p.rapidapi.com/news';

    const OPTIONAL_PARAMS =
        'count=3&setLang=EN&freshness=Day&textFormat=Raw&safeSearch=Off&mkt=en-US';

    useEffect(() => {
        fetch(`${BASE_URL}/search?q=${coinName}&${OPTIONAL_PARAMS}`, options)
            .then((response) => response.json())
            .then((data) => setNewsData(data), setIsFetching(false))
            .catch((err) => console.error(err));
    }, [coinName]);

    if (isFetching) return <Loading />;

    return (
        <Stack spacing="5">
            <Heading fontSize="3xl">News</Heading>
            <Divider borderColor="gray.400" />

            {newsData?.value?.map((news, index) => {
                const dateToMiliseconds = Date.parse(news.datePublished);
                const milisecondsToActualDate = new Date(
                    dateToMiliseconds
                ).toString();
                return (
                    <Fragment key={index}>
                        <Stack
                            alignItems="center"
                            direction="row"
                            key={index}
                            spacing="4"
                        >
                            <Image
                                alt={news?.name}
                                height="90px"
                                minWidth="120px"
                                src={news?.image?.thumbnail?.contentUrl}
                            />
                            <Stack spacing="1">
                                <Link
                                    href={news?.url}
                                    isExternal
                                    rel="nofollow noreferrer noopener"
                                    target="_blank"
                                >
                                    <Heading color="#3B82F6" fontSize="sm">
                                        {news?.name}
                                    </Heading>
                                </Link>
                                <Text color="gray.400" fontSize="sm">
                                    {milisecondsToActualDate}
                                </Text>
                                <Text fontSize="sm" noOfLines={2}>
                                    {news?.description}
                                </Text>
                            </Stack>
                        </Stack>
                        <Divider borderColor="gray.400" />
                    </Fragment>
                );
            })}
        </Stack>
    );
};
