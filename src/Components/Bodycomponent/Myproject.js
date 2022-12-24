import React from 'react';
import { AiOutlineAmazon,AiOutlineBank,AiFillLock } from "react-icons/ai";
import { FcTodoList,FcMultipleSmartphones,FcOnlineSupport,FcPortraitMode} from "react-icons/fc";
import { MdDirectionsRailwayFilled,MdOutgoingMail } from "react-icons/md";

const Myproject = () => {
    return (
        <>
            <div className="container mt-5">
                <h1 className="text-warning mb-5 border-bottom">PROJECTS</h1>

                <div className="row text-center text-white mb-5">
                    <div className="col-sm-4">
                        <AiOutlineAmazon size="3em" />
                        <h3>Amazon_Clone</h3>
                        <p className="ss-color">Using HTML CSS and Django</p>
                        <p>Pure Authentication Based</p>
                        <a target="_blank" href="https://github.com/Amansonukumarsah/Amazon-app"
                            className="nav-link bg-success">Source-Code</a>
                    </div>

                    <div className="col-sm-4">
                        <FcTodoList size="3em" />
                        <h3>Todo App</h3>
                        <p className="ss-color">Using React and Django</p>
                        <p className="ss-color">The task given by Company(Name=The Tann Mann foundation</p>
                        <a target="_blank" href="https://github.com/Amansonukumarsah/baekendandfrontendof-todo"
                            className="nav-link bg-success">Source-code</a>
                    </div>

                    <div className="col-sm-4">
                        <FcMultipleSmartphones size='3rem'/>
                        <h3>Multipurpose App</h3>
                        <p className="ss-color">Using React.js</p>
                        <p>In this Project we make todo app,Watch,Calculator and so many small things</p>
                        <a target="_blank" href="https://github.com/Amansonukumarsah/Multi-purpose-app"
                            className="nav-link bg-success">Source-code</a>
                    </div>
                </div>

                <div className="row text-center text-white mb-5">
                    <div className="col-sm-4">
                        <AiOutlineBank size='3rem' />
                        <h3>Loan_Service</h3>
                        <p className="ss-color">Using Django HTML and Css</p>
                        <a target="_blank" href="https://github.com/Amansonukumarsah/loanservice"
                            className="nav-link bg-success">Source-code</a>
                    </div>
                    <div className="col-sm-4">
                        <FcTodoList size="3em" />
                        <h3>CRUD</h3>
                        <p className="ss-color">Using Django HTML CSS</p>
                        <a target="_blank" href="https://github.com/Amansonukumarsah/CrudusingDjango"
                            className="nav-link bg-success">Source-code</a>
                    </div>
                    <div className="col-sm-4">
                        <MdOutgoingMail size="3em" />
                        <h3>Gmail_Clone(on going) </h3>
                        <p className="ss-color">using React.js</p>
                        <p>After Sometime i will Upload on the github</p>
                    </div>
                </div>

                <div className="row text-center text-white mb-5">
                    <div className="col-sm-4">
                        <MdDirectionsRailwayFilled size="3em" />
                        <h3>IRCTC</h3>
                        <a target="_blank" href="https://github.com/Amansonukumarsah/irctc.git"
                            className="nav-link bg-success">Source-code</a>
                    </div>
                    <div className="col-sm-4">
                        <FcPortraitMode size='3rem'/>
                        <h3>Portfolio</h3>
                        <p className="ss-color">This task is give by comapny(Name=kavie)</p>
                        <p>This can be made by using React.js</p>
                        <a target="_blank" href="https://github.com/Amansonukumarsah/Portfolio"
                            className="nav-link bg-success">Source-code</a>
                    </div>
                    <div className="col-sm-4">
                        <FcOnlineSupport size='3rem'/>
                        <h3>FemiAuthentication</h3>
                        <p className="ss-color">Using Html Css and Django</p>
                        <p>The task which is given company(Name=femipilot)</p>
                        <a target="_blank" href="https://github.com/Amansonukumarsah/femepilotauthentication"
                            className="nav-link bg-success">Source-code</a>
                    </div>

                    <div className="col-sm-4">
                        <MdOutgoingMail size='3rem' />
                        <h3>Gmail_Clone</h3>
                        <p className="ss-color">Using React.js and Django Rest_Api</p>
                        <p>....</p>
                        <a target="_blank" href="https://github.com/Amansonukumarsah/gmailclonewithdajgoapi"
                            className="nav-link bg-success">Source-code</a>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Myproject;