import {useQuery} from "react-query";

const fetchApi = async() => {
    return await fetch(`${process.env.REACT_APP_API_URL}`).then((res)=> res.json());
}

export const RNQueryPage = () => {

    const {data, isError, error, isLoading, refetch} = useQuery(
        'sample-data', 
        fetchApi,
        {
            cacheTime: 5000,
            staleTime: 30000,
            retryOnMount: false
        });
        
    if(isLoading){
        return <p>{`Loading...`}</p>
    }

    if(isError){
        return <p>{error?.message}</p>
    }

    return(
        <div>
            <button onClick={()=> refetch()}>Refecth Data</button>
            {data && data?.map((res) => (
                <p>{res?.title}</p>
            ))}
        </div>
    );
}