import {useState, useEffect} from "react";

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch(url)
            .then((data) => {
                if (!data.ok) {
                    throw Error("Smething went wrong in URL");
                }
                return data.json();
            })
            .then((res) => {
                setData(res);
                setIsLoading(false);
                setError('');
            })
            .catch(err => {
                setIsLoading(false);
                setError(err.message);
            });
    }, []);

    return [data, isLoading, error]
}