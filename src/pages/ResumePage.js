import React from 'react';
import ResumeContent from '../components/ResumeContent';
import Hero from '../components/Hero';

function ResumePage(props) {

    return(
        <div align="center">
             <Hero title={props.title}/>
             <ResumeContent>

             </ResumeContent>
        
        </div>
        
    );

}

export default ResumePage;