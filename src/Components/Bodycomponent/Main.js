import React from 'react'
import Menu from './Menu'
import Routefile from './Routerfile'
const Main=()=>{
    return (
        <>
         <div className='container-fluid' style={{backgroundColor: "rgb(52,58,64)"}}>
            <div className='row'>
                <div className='col-2 Menu'>
                   <Menu/>
                </div>
                <div className='col-10 Routerfile'>
                    <Routefile/>
                </div>
            </div>
         </div>
        </>
    )
}

export default Main;