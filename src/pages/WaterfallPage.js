import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';
import pic2 from '../assets/images/pic2.jpg'

function WaterfallPage(props){

    return(
        <div align="center">
            <Hero title={props.title} />
            <img src={pic2} height={600} width={400} alt=""/>
            <Content>
                <p>During August of 2020 a couple of friends and I went up to Estacada, Oregon to find a trailhead that was rumored to have goregous views and a waterfall at the end. We hiked about a mile and a half uphill, worried that we had either missed the entrance or that the hike itself was a dud until we saw some people emerge from the trees to our right. We asked if they had gone on the waterfall hike to which they replied yes so we thanked them and followed the path they had come out from. Four miles, a few caves, and a lot of rope-climbing later, we finally made it to the waterfall. We were even able to make our way to the top of the waterfall and see the water from the river that was feeding the beast.  </p>
            </Content>
        </div>
    );

}

export default WaterfallPage;