import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Myproject from './Myproject';
import Skill from './Skill';
// import Menu from './Menu';
const Routerfile = () => {
    return (
        <>
            <div>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/contact" element={<Contact/>} />
                    <Route exact path="/myproject" element={<Myproject/>} />
                    <Route exact path="/skill" element={<Skill/>} />
                </Routes>
            </div>
        </>
    )
}

export default Routerfile;