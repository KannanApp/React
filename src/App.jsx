import {useState, useEffect} from "react";
import './App.css';
import BlogList from "./Dashboard/BlogList";
import { TextBox } from "./Components/TextBox";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  
  const handleDelete = (idx) => {
    const res = data.filter((item)=> item?.id !== idx);
    setData(res);
  }

  useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((data) => {
      if(!data.ok){
        throw Error("Smething went wrong in URL");
      }
      return data.json();
    })
    .then((res)=> {
      setData(res);
      setIsLoading(false);
      setError('');
    })
    .catch(err=> {
      setIsLoading(false);
      setError(err.message);
    });
  }, []);

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
