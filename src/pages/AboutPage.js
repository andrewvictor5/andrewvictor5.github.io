import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';
import pic4 from '../assets/images/pic4.jpg'

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title}/>
            <img src={pic4} height={600} width={600} class="center" alt="Sturegon fishing in Astoria, OR"/>
            <Content>
                <p>My name is Andrew Victor and I am a recent graduate from Oregon State University with a Bachelor's Degree in Electrical & Computer Engineering and a Minor in Computer Science. </p>
                <p>I am currently searching for Full-Time Employment entry-level opportunities in the Software Development, Software Maintenance, or Quality Assurance fields. My current location is in Oregon however I am willing and able to relocate. The majority of my background in school and my internships involved software maintenance and development. </p>
                <p>During my first internship, I worked for a software company called Callisto Integration as a Software Engineering intern where my team worked on analyzing and implementing MES (Manufacturing Execution Systems) solutions for our clients. This internship taught me the importance of gathering requirements from our clients and communication between multiple different companies.</p>
                <p>At my second internship, I worked for Mentor Graphics as an AMS (Analog & Mixed-Signal) Intern. Due to the COVID-19 pandemic, I worked this internship remotely which was a new and different, yet very valuable experience for me. My main project involved converting PSpice models into Spice models that would be added to upcoming versions of Mentor's in-house software. This internship taught me the values of inner-team communication and how to be an efficient, independent worker. </p>
                <p>In my free time, I really enjoy exercising. From going to the gym, going on runs, going hiking, fishing, or just playing sports, I love to spend as much time outdoors as possible. My favorite sport to play is golf, and although I am not the best, it gives me an opportunity to go out and improve my skills every time. When the weather doesn't permit for outdoor activities, I like to spend my time reading, listening to podcasts, and working on individual projects. </p>
                
            </Content>
        
        </div>
    );

}

export default AboutPage;
