import { useState, useEffect } from "react";

export const useFetch = (url, method, body) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const abortCont = new AbortController();
        fetch(url, {
            signal: abortCont.signal,
            method,
            body: body ? JSON.stringify({
                title: body?.title,
                body,
                userId: body?.userId
              }) : null,
            headers: { 'Content-Type': 'application/json' },
        })
            .then((data) => {
                if (!data.ok) {
                    throw Error("Smething went wrong in URL");
                }
                return data.json();
            })
            .then((res) => {
                setData([res]);
                setIsLoading(false);
                setError('');
            })
            .catch(err => {
                if (err.name === "AbortError") {
                    console.log("fetch aborted");
                } else {
                    setIsLoading(false);
                    setError(err.message);
                }
            });
        return () => abortCont.abort();
    }, []);

    return [data, isLoading, error, setData]
}