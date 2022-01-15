import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./slinks.css"

const Slinks = () => {
    return (
        <div className='container-fluid  slinks-cup shadow-lg '>
        <div className='row  slinks-container pr-3  '>
                <div className='col-2 slinks-col1 border-1    '>
                    
                <p className='fw-bold'><span className='slinks-logo' ><InstagramIcon   fontSize="large"/></span>#ran08.13</p>
            </div>
            <div className='col-2 slinks-col2   '>
            <p className=' fw-bold'><span className='slinks-logo'><FacebookIcon fontSize="large"/></span>#KaranBandekar</p>
            </div>
            <div className='col-2 slinks-col3   '>
            <p className='fw-bold'><span className='slinks-logo'><LinkedInIcon fontSize="large"/></span>#Karan</p>
            </div>
                <div className='col-2 slinks-col4 '>
                    
            <p className='fw-bold'><span className='slinks-logo'><GitHubIcon fontSize="large"/></span>#ran_con</p>
            </div>
        </div>
    </div>
    )
}

export default Slinks
