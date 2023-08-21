import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "../src/Components/NavBar";
import NotFound from '../src/Dashboard/NotFound';
import { BlogView, Feed, Profile } from '../src/Dashboard';
import Search from './Dashboard/Search';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <div className='content'>
          <Routes>
            <Route path='/' Component={Feed} />
            <Route path='/Profile' Component={Profile} />
            <Route path="/BlogView/:id" Component={BlogView} />
            <Route path='/Search' Component={Search}/>
            <Route path='*' Component={NotFound} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
