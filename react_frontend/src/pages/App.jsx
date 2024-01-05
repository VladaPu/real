import React from 'react';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';

import Header from '../components/Header';
import Home from '../pages/Home';
import CategoryPage from '../pages/CategoryPage';
import RecipePage from '../pages/RecipePage';

import '../styles/App.css';
import '../fonts/Exo2-VariableFont_wght.ttf'
import RecipesPage from "./RecipesPage";
import AboutPage from "./AboutPage";

function App() {

    return (
        <div className="app">
            <Router>
                <Header/>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/category/:category"
                               element={<CategoryPage/>}/>
                        <Route path="/recipe/:id" element={<RecipePage/>}/>
                        <Route path="/recipes" element={<RecipesPage/>}/>
                        <Route path="/about" element={<AboutPage/>}/>
                    </Routes>
                </div>
            </Router>

        </div>
    )
        ;

}

export default App;