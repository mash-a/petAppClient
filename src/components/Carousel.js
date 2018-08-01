import React from 'react';
import {
    UncontrolledCarousel
} from 'reactstrap';
import './ComponentCSS/Carousel.css'

const items = [
    {
        src: require('../afewdogs.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1',
        header: 'Slide 1 Header'
      },
      {
        src: require('../rooandphoebe.png'),
        altText: 'Slide 1',
        caption: 'Slide 1',
        header: 'Slide 1 Header'
      },
      {
        src: require('../seancasey.png'),
        altText: 'Slide 1',
        caption: 'Slide 1',
        header: 'Slide 1 Header'
      },
      {
        src: require('../peggy.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1',
        header: 'Slide 1 Header'
      },
      {
        src: require('../ruby.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1',
        header: 'Slide 1 Header',
      },
];

const Carousel = () => {
    return (
        <div className="container"><UncontrolledCarousel className="lg" items={items} /></div>
    )
}

export default Carousel;