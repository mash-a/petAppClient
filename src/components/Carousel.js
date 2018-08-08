import React from 'react';
import {
    UncontrolledCarousel
} from 'reactstrap';
import './ComponentCSS/Carousel.css'

const items = [
    {
        src: require('../afewdogs.jpg'),
        altText: 'Slide 1',
        // caption: 'Hanging Out',
        header: 'Out on a walk'
      },
      {
        src: require('../rooandphoebe.png'),
        altText: 'Slide 1',
        // caption: 'Slide 1',
        header: 'Pups enjoying Fort Greene Park'
      },
      {
        src: require('../seancasey.png'),
        altText: 'Slide 1',
        // caption: 'Slide 1',
        header: 'Sean Casey Annual Dog Wash'
      },
];

const Carousel = () => {
    return (
        <div className="carousel container"><UncontrolledCarousel className="lg" items={items} /></div>
    )
}

export default Carousel;