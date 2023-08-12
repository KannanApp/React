import './App.css';
import BlogList from "./Dashboard/BlogList";
import { TextBox } from "./Components/TextBox";
import { useFetch } from "./Constants/useFetch";

function App() {
  const [data, isLoading, error, setData] = useFetch('https://jsonplaceholder.typicode.com/posts');  
  const handleDelete = (idx) => {
    const res = data.filter((item)=> item?.id !== idx);
    setData(res);
  }

  return (
    <div className="App">
      <h1 className="header">Todo List</h1>
      {isLoading && <TextBox title={'Loading...'} />}
      {error && <TextBox title={error} />}      
      {data && !error && <BlogList blogs={data} handleDelete={handleDelete} />}
    </div>
  );
}

export default App;
