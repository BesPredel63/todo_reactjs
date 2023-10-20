import React from "react";
import {Route, Routes} from 'react-router-dom';
import NavBar from "./components/UI/NavBar/NavBar";
import Tasks from "./components/Tasks";
import Categories from "./components/Categories";
import NotFound from "./components/NotFound";
import './styles/App.css';

function App() {
  return (
    <div className='App'>
        <NavBar />
        <Routes>
            <Route path='/' element={<Tasks />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;
