import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';

import Linkify from 'react-linkify';

function ProjectsPage(props){


    return(

        <div>
            <Hero title={props.title} />

            <Content>

                <p>Personal Projects:</p>
                <p>This website!</p>
                <p>School Projects:</p>
                <p><Linkify>OSU Project Showcase: https://eecs.oregonstate.edu/project-showcase/profile/?id=z2pfYx3wixKYpdEn</Linkify></p>
                <p><Linkify>GitHub: https://github.com/andrewvictor5</Linkify></p>

            </Content>

        </div>

    );

}

export default ProjectsPage;