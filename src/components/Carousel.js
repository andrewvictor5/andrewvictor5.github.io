import React from 'react';

import Card from '../components/Card';

import pic1 from '../assets/images/pic1.jpg';
import pic2 from '../assets/images/pic2.jpg';
import pic3 from '../assets/images/pic3.JPEG';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Yellowstone',
                    subTitle: 'Salt Plains at Yellowstone National Park',
                    imgSrc: pic1,
                    link: '/yellowstone',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Clackamas Falls',
                    subTitle: 'Waterfall at the end of a hike in Estacada, OR',
                    imgSrc: pic2,
                    link: '/waterfall',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Hawaii',
                    subTitle: 'Sunset at Kailua Kona on the Big Island',
                    imgSrc: pic3,
                    link: '/hawaii',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}   

export default Carousel; 