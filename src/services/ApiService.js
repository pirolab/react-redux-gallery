import { useState, useEffect } from 'react';

export const useDataFetch = url => {
    const [data, setData] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(setData)
            .catch(setError)
    }, [url]);

    return { data, error };
};