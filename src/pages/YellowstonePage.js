import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';
import pic1 from '../assets/images/pic1.jpg'

function YellowstonePage(props){

    return(
        <div align="center">
            <Hero title={props.title} />
            <img src={pic1} height={600} width={400} alt=""/>
            <Content>
                <p>In October of 2020, I had the opportunity to go visit one of my best friends from high school who studied Microbiology at Montana State University and is currently living in Bozeman, Montana. It was my first time ever visiting the state and the scenery and nature there was beyond incredible. One of the days that I was there, we drove about an hour and a half to Yellowstone National Park, where I got to see some awesome views like the one pictured above. This location in particular was one of the salt mines that can be found at Yellowstone, and let me tell you, you can smell the sulfur coming from here from a mile away. We got to see the "Grand Canyon of Yellowstone" on this trip. Montana was a wonderful place to visit and I would love to go back and do some more exploring someday. </p>
            </Content>
        </div>
    );

}

export default YellowstonePage;