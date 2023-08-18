import "../App.css";
import { useParams } from "react-router-dom";
import { TextBox } from "../components/TextBox";
import { useFetch } from "../constants/useFetch";

const BlogView = () => {
    const { id } = useParams();
    const [data, isLoading, error] =useFetch(`${process.env.REACT_APP_API_URL}${id}`, 'get');

    return (
        <div>
            {isLoading && <TextBox title={'Loading...'} />}
            {error && <TextBox title={error} />}
            {data && !error && (
                <p className="blogViewText">{`Blog Id : ${id} \nTitle: ${data?.title} \nDetails: ${data?.body}`}</p>
            )}
        </div>
    );
}
export default BlogView;