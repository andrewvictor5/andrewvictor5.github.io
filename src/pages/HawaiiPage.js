import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';
import pic3 from '../assets/images/pic3.JPEG'

function HawaiiPage(props){

    return(
        <div align="center">
            <Hero title={props.title} />
            <img src={pic3} height={600} width={400} alt="" />
            <Content>
                <p>To this day, Hawaii has, and always will be one of my favorite spots to vacation at. So far, I have been to the Big Island, Oahu, Maui, and Lanai, but it is my goal to visit all of them at some point in my life. This particular trip was on the Big Island during December of 2019 where I went with a mixed group of friends from high school and college. Over the course of the trip we went all over the island checking out different hikes, beaches, and other various attractions. This particular photo was taken at the Kailua Kona and about ten minutes before this photo was taken, we ran into some seaturtles on the beach. </p>
            </Content>
        </div>
    );

}

export default HawaiiPage;