import { Avatar } from '@mui/material'
import React from 'react'
import "./hearder.css"

const Hearder = () => {
    return (
        <div className="container-fluid border hearder-container pt-5  ">
            <div className="row  ">
                <div className="col-8 ">
                    <h3 >INTERNSHALA</h3>
                    <p>tag User</p>
                    <h4>Your Name</h4>
                    <p>Location
                        <br/>
                       Countary
                    </p>
                     
                </div>
                <div className='col-4 '>
                <Avatar  sx={{ width: 100, height: 100 }}  alt="Remy Sharp" src="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=" />
                    <br/>
                    <button className='button btn btn-outline-primary mr-2'>SAVE</button> 
                    <button className=' button btn btn-outline-primary mr-2'>SHARE</button> 
                    <button className=' button btn btn-outline-primary mr-2'>ORDER</button> 

                </div>
            </div>

        </div>
    )
}

export default Hearder
