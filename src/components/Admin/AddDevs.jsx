


import React from 'react';
import { Card, Col, Container, Row, Table, Button, Form } from 'react-bootstrap';
import  'boxicons';
import './Admin.css'


const AddDevs = () => {
  return (
    <section className='my-3 addDevs '>
        <Container>
            <Row>

                <Col md={3}>
                    <Card>
                        <Card.Header><h4>Edit Preview</h4></Card.Header>
                        <Card.Body>
                            <Row>
                                <Col>
                                <Card.Img src={"https://www.team.gsamdani.com/wp-content/uploads/2016/05/tm1.jpg"} />
                                </Col>
                                <Col>
                                    <span>User Name</span>
                                    <h5>ananda44</h5>
                                    <span>Call</span>
                                    <h6>01913918163</h6>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body >
                        <h5>Name: <p>Ananda Kumar Saha</p></h5>
                        <h5>Email: <p>anandasaha484@gmail.com</p></h5>
                        <h6>Genger: Male</h6>
                        <h6>Skill: MERN Stack</h6>
                        <hr />
                        <h6><i class='bx bxl-facebook'></i>:               </h6>
                        <h6><i class='bx bxl-linkedin' ></i>:               </h6>
                        <h6><i class='bx bxl-twitter'></i>:               </h6>
                        <h6><i class='bx bxl-github'></i>:               </h6>
                        <h6><i class='bx bxl-youtube'></i>:               </h6>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={9}>
                    <Card>
                        <Card.Header>Add Developers Data</Card.Header>
                        <Card.Body>
                        <Form >
                            <Row>
                                <Col md={5}>

                                </Col>
                                <Col md={7}>
                                    <div className="my-2">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter name" />
                                    </div>
                                    <div className="my-2">
                                        <Form.Label>User name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter user name" />
                                    </div>
                                    
                                    <Form.Group className="mb-1" controlId="formBasicUserUame">
                                        
                                    </Form.Group>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <hr />
                                    <input type="radio" id="Male" name='gender' value='Male' /> <label htmlFor="Male">Male</label> &nbsp;
                                    <input type="radio" id="Female" name='gender'  value='Female' /> <label htmlFor="Female">Female</label>
                                    <Form.Group className="mb-1" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Check me out" />
                                    </Form.Group>
                                <Button variant="primary" type="submit">Submit</Button>
                                </Col>
                            </Row>
                            
                        </Form>
                        </Card.Body>
                    </Card>


                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default AddDevs