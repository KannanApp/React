import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import NavBar from "../src/Components/NavBar";
import NotFound from '../src/Dashboard/NotFound';
import { BlogView, Feed, Profile } from '../src/Dashboard';
import Search from './Dashboard/Search';
import { RNQueryPage } from './RNQuery/RNQueryPage';
import { ReactQueryDevtools } from "react-query/devtools";
import RNQueryPagination from './RNQuery/RNQueryPagination';
import { FormikFile } from './Formik/Form';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
              <Route path='/rnquery' Component={RNQueryPage} />
              <Route path='/RNPagination' Component={RNQueryPagination} />
              <Route path='/Formik' Component={FormikFile} />
            </Routes>
          </div>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
