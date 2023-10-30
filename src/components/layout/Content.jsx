import './Content.css'
import React from "react";
import {Routes, Route} from 'react-router-dom'

import Home from '../../views/pages/Home';
import About from '../../views/pages/About';
import Param from '../../views/pages/Param';
import NotFound from '../../views/pages/NotFound';

const Content = props => (
    <main className="Content">
        <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/param/:id" element={<Param/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </main>
)

export default Content