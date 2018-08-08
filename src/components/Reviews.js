import React from 'react';
import { Row, Col } from 'reactstrap';

function Reviews() {
    return (
        <div className="reviews container">
            <Row>
                <h4>Reviews</h4>
            </Row>
            <Row>
                <Col>
                    <p>Brooklyn Bark is amazing! I have used Brooklyn Bark to walk and board my pup since moving to Williamsburg in 2013.  The team at BB is one of the best in the city!  Not only are they reliable and accommodating, they are top-notch animal experts.  My dog has some unique quirks and every walker I have had has paid special attention to make sure there are no issues and that my dog is cared for.</p><h6>Katie, Williamsburg</h6>
                </Col>
                <Col>
                    <p>I cannot say enough good things about Brooklyn Bark. If you're considering them to take care of your 4 legged friend, do it, you won't regret it!</p><h6>Phillip, Prospect Heights</h6>
                </Col>
                <Col>
                    <p>Hands down the most helpful, amazing dog walking company you can ask for!
                    My dog broke her toe and the owner personally showed up at my apt, called VERG, and drove my dog and I there.
                    Insanely helpful and caring.</p><h6>David, Carroll Gardens</h6>
                </Col>
            </Row>
            <Row>
                <a href="https://www.yelp.com/biz/brooklyn-bark-brooklyn-3">Check out more on Yelp</a>
            </Row>
        </div>
    )
}

export default Reviews;