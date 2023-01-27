import { Spinner, Stack } from '@chakra-ui/react';
import React from 'react';

export const Loading = () => {
    return (
        <Stack
            alignItems="center"
            height="100vh"
            justifyContent="center"
            width="100vw"
        >
            <Spinner
                color="blue.500"
                emptyColor="gray.200"
                size="xl"
                speed="0.65s"
                thickness="4px"
            />
        </Stack>
    );
};
