import React from 'react'
import { NavLink } from 'react-router-dom';
import Amanimage from '../Image/Aman.jpg';
import '../Css/core.css';
const Home = () => {
    return (
        <>
            <div className="mt-5" >
                <div className="text-center">
                    <img src={Amanimage} alt="ProfilePic" className="img-thumbnail" width="250px" height="150px" />
                </div>
                <div className="mt-5 text-white mx-5 text-justify">
                    <h1 className="font-weight-bold st-font">Hello,</h1>
                    <div className="px-4"style={{lineHeight:"2rem;"}} >
                        <p className='mx-5'> I am <b className="text-warning">Aman Kumar Sah</b> </p>
    
                        <p>  <strong style={{color:'orange'}}>A WEB DEVELOPERS</strong> </p>
                        
                        <p className='mx-3'>Currently Pursing  bachelor’s degree from <b className="text-warning">Maulana Abul Kalam Azad University Of Technology,WB</b></p>
                       
                        <p className='mx-3'>love to play Cricket,Coding and Web Developing as Full Stack Developer </p>
                        <div>
                            <a target="_blank" href="https://drive.google.com/file/d/1r6O-NzM2mYbKdOQ1yUraSU-zsaLrbV3J/view?usp=share_link" className="nav-link bg-success text-center">RESUME</a>
                        </div>
                        <br/>
                        <p className="text-danger">my Codding Profile</p>
                        <div className="d-flex">
                            <a  target="_blank" href="https://auth.geeksforgeeks.org/user/sonukumarshah8102/practice/" className="nav-link  btn btn-outline-warning my-3 mr-5" style={{color:'white'}}>
                                <p className='my-1'>G-F-G</p>
                            </a>
                            <a target="_blank" href="https://leetcode.com/Aman8102/" className="nav-link  btn btn-outline-info my-3 mx-2" style={{color:'orange'}}>
                               <p className='my-1'>LEET-CODE</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <NavLink to="/contact" className="btn btn-outline-warning my-3 mr-5">Hire Me</NavLink>
                    <NavLink to="/contact" className="btn btn-outline-info my-3">Contact</NavLink>
                </div>
            </div>
        </>
    )
}

export default Home;