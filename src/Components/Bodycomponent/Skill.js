import React from 'react';
import '../Css/core.css';
const Skill = () => {
    return (
        <>
            <div className="container-fluid mt-5 skill">
                <h1 className="text-warning mb-5 border-bottom">SKILLS</h1>

                <div className="row text-white">
                    <div className="col-sm-5">
                        <h3 className="mt-5">HTML/CSS</h3>
                        <div className="progress">
                            <div className="progress-bar bg-danger" role="progressbar" style={{width:"90%", ariaValuenow:"100", ariaValuemin:"0", ariaValuemax:"100"}}>90%</div>
                        </div>
                    </div>
                    <div className="col-sm-5 offset-sm-2">
                        <h3 className="mt-5">JavaScript</h3>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width:"65%", ariaValuenow:"95", ariaValuemin:"0", ariaValuemax:"100"}}>65%</div>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <h3 className="mt-5">REACT.JS</h3>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: "70%"}}>70%</div>
                        </div>
                    </div>
                    <div className="col-sm-5 offset-sm-2">
                        <h3 className="mt-5">Python</h3>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}>80%</div>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <h3 className="mt-5">SQL</h3>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}>80%</div>
                        </div>
                    </div>
                    <div className="col-sm-5 offset-sm-2">
                        <h3 className="mt-5">Django</h3>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}>80%</div>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <h3 className="mt-5">C</h3>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}>80%</div>
                        </div>
                    </div>
                    <div className="col-sm-5 offset-sm-2">
                        <h3 className="mt-5">DSA</h3>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style={{width: "70%"}}>70%</div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Skill;