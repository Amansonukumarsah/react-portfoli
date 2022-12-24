import React from 'react';
import { SiFacebook } from "react-icons/si";
// import { NavLink } from 'react-router-dom';
import { FcCellPhone } from "react-icons/fc";
import { MdOutgoingMail } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import '../Css/core.css';
import { AiFillInstagram,AiFillLinkedin,AiFillGithub } from "react-icons/ai";
const Contact = () => {
    return (
        <>
            <div className="container-fluid mt-5">
                <h1 className="text-warning mb-5 border-bottom">CONTACT US</h1>
                <div className="row text-white mb-5">
                    <p className="mx-auto mb-5">
                        Do you have any questions? Please do not hesitate to contact. I will come back to you within a matter of hours to help you.
                    </p>
                    <div className="col-sm-9 mb-5">
                        <form action="" method="POST">
                           
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="Name">Your Name</label>
                                    <input type="text" className="form-control" name="Name" />
                                </div>
                                <br/>
                                <div className="form-group col-md-6">
                                    <label for="Email">Your Email *</label>
                                    <input type="email" className="form-control" name="Email" required />
                                </div>
                            </div>
                            <br/>
                            <div className="form-group">
                                <label for="Subject">Your Subject</label>
                                <input type="text" className="form-control" name="Subject" />
                            </div>
                            <br/>
                            <div className="mb-3">
                                <label for="Message">Your message *</label>
                                <textarea className="form-control" name="Message" required></textarea>
                            </div>
                            <button className="btn btn-primary" type="submit">Send</button>
                        </form>
                    </div>
                    <div className="col-sm-3 text-center">
                        <ul className="list-unstyled">
                            <li>
                                <ImLocation size='3rem' color="7FFF00"/>
                                <p>Chhatauni,Bihar, India</p>
                            </li>
                            <li>
                                <FcCellPhone size='3rem' color="7FFF00"/>
                                <p>+ 91 6200894044</p>
                            </li>
                            <li>
                                <MdOutgoingMail size='3rem' color="7FFF00"/>
                                <p>amankumarshah8102@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center d-flex insta">
            <div>
                <a className="btn btn-outline-warning " href="https://github.com/Amansonukumarsah" target="_blank"><AiFillGithub/></a>
            </div>
            <div>
                <a className="btn btn-outline-info mx-2" href="https://www.facebook.com/aman.sah.7921975/" target="_blank"><SiFacebook/></a>
            </div>
            <div>
                <a className='btn btn-outline-danger' href="https://www.instagram.com/8978aman/" target="_blank"><AiFillInstagram/></a>
            </div>
            <div>
                <a className='btn btn-outline-success mx-2' href="https://www.linkedin.com/in/aman-kumar-sah-90b433218/" target="_blank"><AiFillLinkedin/></a>
            </div>
        </div >
        <br/>
        </>
    )
}

export default Contact;