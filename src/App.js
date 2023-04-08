import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import  {EnrollPage} from './pages/enrollPage';
import {SchedulePage} from './pages/schedulePage';
// import { useState } from 'react';


export default function App() {
  // let [data, setData] = useState([]);
  return (
    <BrowserRouter>
      <Link to="/Schedule" state={{data:[]}} className="link">
        
      </Link>
      <div className='App'  >
      <Routes>
        <Route path="/" Component={EnrollPage} />
        <Route path="/Schedule" Component={SchedulePage}  />
      </Routes>
      
    </div>
    
    </BrowserRouter>
    
  )
}
