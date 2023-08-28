import { useInfiniteQuery } from "react-query";
import axios from "axios";
import { Fragment } from "react";

const fetchAPI = (start = 0) => {
    const pageNum = start === 0 ? start : start?.pageParam + 1;
    return axios.get(`${process.env.REACT_APP_API_PHOTOURL}_start=${pageNum}&_limit=5`)
}

const RNQueryPagination  = () => {
    const { data, fetchNextPage} = useInfiniteQuery(
        ['pagination'],
        fetchAPI,
        {
            getNextPageParam: (_lastPage, pages) => {
                if(pages.length > 0){
                    return pages.length + 1
                }else{
                    return undefined
                }
            }
        }
    );
    
    return ( 
        <div>
            <h1>This is RNQuery Pagination</h1>
            {data?.pages.map((item, idx) => {
                return(
                    <Fragment key={idx}>
                        {item.data.map((data) => (
                            <p key={data?.id}>{data?.title}</p>
                        ))}
                    </Fragment>
            )})}
            <button onClick={fetchNextPage}>Next Page</button>
        </div>
     );
}
export default RNQueryPagination;