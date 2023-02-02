import { useState } from 'react';
import { Collapse, Heading, Link, Stack, Text } from '@chakra-ui/react';
import { CRYPTO_FAQ_INFO } from '../../constants/constants';

export const SidebarInfo = () => {
    const [showMoreInfo, setShowMoreInfo] = useState({});

    const handleOpenInfo = (index) => () => {
        setShowMoreInfo((state) => ({
            ...state,
            [index]: !state[index],
        }));
    };
    return (
        <Stack as="article" border="1px solid #dadada" borderRadius="10px">
            <Stack as="article" justifyContent={'center'} minWidth="300px">
                <Heading fontSize="md" ml="15px" p="10px 10px 2px">
                    FAQ
                </Heading>
                <Stack p="0 15px 5px">
                    {CRYPTO_FAQ_INFO.map((information, index) => (
                        <Stack
                            borderBottom={index < 4 && '1px solid #dadada'}
                            borderTop={index === 0 && '1px solid #dadada'}
                            direction="column"
                            justifyContent="space-between"
                            key={index}
                            pb="5px"
                            pt={index === 0 && '10px'}
                            spacing="1"
                        >
                            <Link>
                                <Heading
                                    _hover={{ color: '#235789' }}
                                    as="h5"
                                    color="#3B82F6"
                                    cursor="pointer"
                                    fontSize="sm"
                                    onClick={handleOpenInfo(index)}
                                >
                                    {information.question}
                                </Heading>
                            </Link>
                            <Collapse
                                animateOpacity
                                in={showMoreInfo[index]}
                                startingHeight={25}
                            >
                                <Text fontSize="sm">{information.answer}</Text>
                            </Collapse>
                        </Stack>
                    ))}
                </Stack>
            </Stack>
        </Stack>
    );
};
