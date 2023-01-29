import { useEffect, useState } from 'react';

export const useFetch = (url, id) => {
    const [data, setData] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    useEffect(() => {
        setIsFetching(true);
        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data), setIsFetching(false))
            .catch((err) => console.log(err));
    }, [id]);

    return { data, isFetching };
};
