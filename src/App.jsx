import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Feed, Profile, BlogView} from './dashboard';
import NavBar from './components/NavBar';
import NotFound from './dashboard/NotFound';

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
            <Route path='*' Component={NotFound} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
