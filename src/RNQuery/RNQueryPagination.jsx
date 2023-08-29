import { useInfiniteQuery } from "react-query";
import { Fragment } from "react";
import { fetchAPI } from "../Constants/ApiServices";

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