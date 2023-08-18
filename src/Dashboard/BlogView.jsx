import "../App.css";
import { useParams, useNavigate } from "react-router-dom";
import { TextBox } from "../components/TextBox";
import { useFetch } from "../constants/useFetch";

const BlogView = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [data, isLoading, error] =useFetch(`${process.env.REACT_APP_API_URL}${id}`, 'POST', {});


    const onClickHandle = () => {
        navigate("/");
    }

    return (
        <div>
            {isLoading && <TextBox title={'Loading...'} />}
            {error && <TextBox title={error} />}
            {data && !error && (
                <p className="blogViewText">{`Blog Id : ${id} \nTitle: ${data?.title} \nDetails: ${data?.body}`}</p>
            )}
            <button onClick={onClickHandle} className="Redirect">Delete</button>
        </div>
    );
}
export default BlogView;