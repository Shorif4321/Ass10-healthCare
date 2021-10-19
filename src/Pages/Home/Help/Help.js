import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Help = () => {
    return (
        <div className="p-4">
            <Row xs={1} md={2} className="g-4 p-4 ">

                <Col >
                    <h1 className='text-warning'>How can we Help you?</h1>
                    <p>Credibly innovate granular internal or “organic“ sources whereas high standards in web-readiness. Energistically scale future-proof core competencies vis-a-vis impactful experiences. Dramatically synthesize integrated schemas with optimal networks.</p>

                </Col>
                <Col>
                    <img className='img-fluid' src="https://cdn.pixabay.com/photo/2020/05/18/11/09/medication-5185733_960_720.jpg" />
                </Col>

            </Row>
        </div>
    );
};

export default Help;