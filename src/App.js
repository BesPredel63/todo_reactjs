import React from "react";
import {Route, Routes} from 'react-router-dom';
import NavBar from "./components/UI/NavBar/NavBar";
import Goals from "./components/Goals";
import Categories from "./components/Categories";
import NotFound from "./components/NotFound";
import './styles/App.css';

function App() {
  return (
    <div className='App'>
        <NavBar />
        <Routes>
            <Route path='/' element={<Goals />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;
