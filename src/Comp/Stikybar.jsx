import React from 'react';
import "./stiky.css"

const Stikybar = () => {
    return (
        <div className='container-fluid stiky-bar d-lg-none mt-4'>
        <div className='row bg-dark p-4 '>
            <div className='col-12'>
                <button className='button2 btn btn-outline-primary'>SAVE</button>
                <button className=' button2 btn btn-outline-primary'>SHARE</button>
                <button className= ' button2 btn btn-outline-primary'>ORDER</button>
        </div> 
     </div>      
   </div>
    )
}

export default Stikybar
