import { Container, Row, Col, Button } from 'react-bootstrap';

const Intro = () => {
    return(
        <div className="intro">
            <Container className="text-white text-center d-flex justify-content-center align-items-center">
                <Row>
                    <Col>
                        <div className="title">On Target</div>
                        <div className="title">Mission Complete</div>
                        <div className="introButton mt-4 text-center">
                            <a href="#trending">
                                <Button variant="dark" href="#trending">
                                    See All List
                                </Button>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Intro;