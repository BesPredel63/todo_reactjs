import React from "react";
import {Route, Routes} from 'react-router-dom';
import NavBar from "./components/UI/NavBar/NavBar";
import Goals from "./components/Pages/Goals";
import Categories from "./components/Pages/Categories";
import NotFound from "./components/Pages/NotFound";
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
