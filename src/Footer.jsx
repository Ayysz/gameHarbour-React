import React from 'react'
import { Container, Row, Col, Form, Button, FloatingLabel } from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
        <Container>
            <Row className="justify-content-center">
                <Col sm="auto">
                    <h1 id="contact" className='text-white'>Contact</h1>
                </Col>
            </Row>
            <Form>
                {/* Email */}
                <Form.Group as={Row} className="mb-3 justify-content-center text-white" controlId="formHorizalEmail">
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={5}>
                        <Form.Control type="email" placeholder="Email" />
                    </Col>
                </Form.Group>
                {/* Comment */}
                <Form.Group as={Row} className="mb-3 justify-content-center text-white" controlId="formHorizalEmail">
                    <Form.Label column sm={2}>
                        Comment
                    </Form.Label>
                    <Col sm={5}>
                        <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                        />
                    </Col>
                </Form.Group>
                {/* Radio Button */}
               <fieldset>
                <Form.Group as={Row} className="mb-3 justify-content-center text-white">
                        <Form.Label column sm={2} as="legend">
                            Rating
                        </Form.Label>
                        <Col sm={5}>
                            <Form.Check
                            type="radio"
                            label="Puas"
                            name="rating"
                            id="rating1"
                             />
                            <Form.Check
                            type="radio"
                            label="Cukup Puas"
                            name="rating"
                            id="rating2"
                             />
                            <Form.Check
                            type="radio"
                            label="Tidak Puas"
                            name="rating"
                            id="rating3"
                             />

                        </Col>
                </Form.Group>
               </fieldset>
               {/* Button */}
               <Form.Group as={Row} className="mb-3 justify-content-center text-white">
                    <Col sm={{ span: 10, offset: 7 }}>
                    <Button type="submit" variant="primary" size="lg">Kirim</Button>
                    </Col>
                </Form.Group>
            </Form>
        </Container>
    </div>
  )
}

export default Footer