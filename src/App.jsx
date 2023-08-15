import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Feed, Profile, BlogView} from './dashboard';
import NavBar from './components/NavBar';

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
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
