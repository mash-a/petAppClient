import React from 'react';
import { Row, Col } from 'reactstrap';
import './ComponentCSS/Reviews.css';

function Reviews() {
    return (
        <div className="reviews container">
            <hr />
            <Row>
                <h4 className="reviewsHeader">Reviews</h4>
            </Row>
            <Row>
                <Col>
                    <blockquote>
                    <p>Brooklyn Bark is amazing! I have used Brooklyn Bark to walk and board my pup since moving to Williamsburg in 2013.  The team at BB is one of the best in the city!  Not only are they reliable and accommodating, they are top-notch animal experts.  My dog has some unique quirks and every walker I have had has paid special attention to make sure there are no issues and that my dog is cared for.</p>
                    </blockquote>
                    <cite><span>Katie, Williamsburg</span></cite>
                </Col>
                <Col>
                    <blockquote>
                    <p>I cannot say enough good things about Brooklyn Bark. If you're considering them to take care of your 4 legged friend, do it, you won't regret it!</p>
                    </blockquote>
                    <cite><span>Phillip, Prospect Heights</span></cite>
                </Col>
                <Col>
                    <blockquote>
                    <p>Hands down the most helpful, amazing dog walking company you can ask for!
                    My dog broke her toe and the owner personally showed up at my apt, called VERG, and drove my dog and I there.
                    Insanely helpful and caring.</p>
                    </blockquote>
                    <cite><span>David, Carroll Gardens</span></cite>
                </Col>
            </Row>
            <Row className="yelpLink">
                <a 
                href="https://www.yelp.com/biz/brooklyn-bark-brooklyn-3"
                target='_blank'
                rel="noopener noreferrer"
                >Check out more reviews on Yelp</a>
            </Row>
            <hr />
        </div>
    )
}

export default Reviews;