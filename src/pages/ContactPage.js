import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';

import Linkify from 'react-linkify';

function ContactPage(props){
    
    return(

           <div>
               <Hero title={props.title}/>

               <Content>
                   <p>Cell Phone: Available upon request</p>
                   <p><Linkify>Email: ajv541@gmail.com</Linkify></p>
                   <p><Linkify>LinkedIn Profile: https://www.linkedin.com/in/andrew-victor-329aa8176/</Linkify></p>
               </Content>
           </div>
        
    );

}

export default ContactPage;