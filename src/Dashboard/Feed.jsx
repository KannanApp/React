import '../App.css';
import BlogList from "./BlogList";
import { TextBox } from "../components/TextBox";
import { useFetch } from "../constants/useFetch";

function Feed() {
  const [data, isLoading, error, setData] = useFetch('https://jsonplaceholder.typicode.com/posts', 'get');  
  
  const handleDelete = (idx) => {
    const res = data.filter((item)=> item?.id !== idx);
    setData(res);
  }

  return (
    <div>
      <h1 className="header">Todo List</h1>
      {isLoading && <TextBox title={'Loading...'} />}
      {error && <TextBox title={error} />}      
      {data && !error && <BlogList blogs={data} handleDelete={handleDelete} />}
    </div>
  );
}

export default Feed;
