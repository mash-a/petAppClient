import React from 'react';
import {
    UncontrolledCarousel
} from 'reactstrap';

const items = [
    {
        src: '../afewdogs.jpg',
        altText: 'Slide 1',
        caption: 'Slide 1',
        header: 'Slide 1 Header'
      },
]

const Carousel = () => <UncontrolledCarousel items={items} />

export default Carousel;