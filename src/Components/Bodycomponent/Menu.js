import React from 'react'
import { NavLink } from 'react-router-dom';
import Amanimage from '../Image/Aman.jpg' 
import { useState } from 'react';
import '../Css/core.css';
const Menu = () => {
    const [hom,sethom]=useState(false)
    const [skil,setskil]=useState(false)
    const [con,setcon]=useState(false)
    const [pro,setpro]=useState(false)
    const [deactive,setdeactive]=useState(true)
    const home=()=>{
        sethom(true)
        setskil(false)
        setdeactive(true)
        setcon(false)
        setpro(false)
    }

    const skill=()=>{
        sethom(false)
        setskil(true)
        setdeactive(false)
        setcon(false)
        setpro(false)

    }
    const contact=()=>{
        sethom(false)
        setskil(false)
        setdeactive(false)
        setcon(true)
        setpro(false)

    }
    const project=()=>{
        sethom(false)
        setskil(false)
        setcon(false)
        setdeactive(false)
        setpro(true)
    }
    return (
        <>
            <div className="menu">
                <div className="text-center">
                    <img src={Amanimage} alt="ProfilePic" className="img-fluid rounded-circle mt-5" width="100px" heght="100px" />
                        <h3 className="mt-3" >Aman Kumar Sah</h3>
                </div>
                <hr className="border-light" />
                    <nav className="nav flex-column text-center">

                    <NavLink style={{textDecoration: "none",color:'whitesmoke'}} to="/">
                        <ul onClick={home} className={hom?'inactive':deactive?'deactive1':'deactive2'}>
                            <li >
                                HOME
                            </li>
                        </ul>
                                
                    </NavLink>

                    <NavLink style={{textDecoration: "none",color:'whitesmoke'}} to="/myproject">
                        <ul onClick={project} className={pro?'inactive':'deactive'}>
                            <li >
                                MY PROJECT
                            </li>
                        </ul>
                                
                    </NavLink>

                    <NavLink style={{textDecoration: "none",color:'whitesmoke'}} to="/skill">
                        <ul onClick={skill} className={skil?'inactive':'deactive'}>
                            <li >
                                SKILL
                            </li>
                        </ul>
                                
                    </NavLink>

                    <NavLink style={{textDecoration: "none",color:'whitesmoke'}} to="/contact">
                        <ul onClick={contact} className={con?'inactive':'deactive'}>
                            <li >
                                CONTACT
                            </li>
                        </ul>
                                
                    </NavLink>
                    </nav>
            </div>
        </>
    )
}

export default Menu;