import { Link } from "react-router-dom";

const BlogList = (props) => {
    const {blogs, handleDelete} = props;
    
    return (
        <div className="todo_div">
            {blogs.map((item, idx) => (
                <ul className="item_div" key={idx}>
                    <Link to={`/BlogView/${item?.id}`}>
                        <h1 className="text">{`${item?.id}. ${item?.title}`}</h1>
                    </Link>
                    <button className="btn" onClick={ () => handleDelete(item?.id)}>Delete</button>
                </ul>
            ))}
        </div>
    );
}

export default BlogList;