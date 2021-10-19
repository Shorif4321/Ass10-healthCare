import React from 'react';
import { Row, Col } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <div className="p-2">
            <h1 className="my-2 text-center">New Born Baby Care Service</h1>
            <Row xs={1} md={2} className="g-4 p-4 ">
                <Col>
                    <img className='img-fluid' src="https://images.unsplash.com/photo-1574706472779-9b257f717490?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80&fbclid=IwAR1-Kr0ziAPrPnd-giKnYvVu96luKUnzOne_G5DAGmx7EsRySOKWkTLijro" />
                </Col>

                <Col >
                    <h1 className='text-warning'>Newborn Items You Don't Actually Need to Buy</h1>
                    <p>We get it: Buying all the baby gear can help you feel more in control. But you can save a lot of cash—and still get by in those early months—without purchasing everything you think you need to.</p>

                </Col>


            </Row>
        </div>
    );
};

export default AboutUs;