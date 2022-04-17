


import React from 'react';
import { Card, Col, Container, Row, Table, Button } from 'react-bootstrap';
import  'boxicons';
import './Admin.css'


const AddDevs = () => {
  return (
    <section className='my-3 addDevs'>
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
                        <Card.Body>
                        <h5>Name:Ananda Kumar Saha</h5>
                        <h5>Email: anandasaha484@gmail.com</h5>
                        <h5>Genger: Male</h5>
                        <h5>Skill: MERN Stack</h5>
                        <hr />
                        <h6><i class='bx bxl-facebook'></i>:               </h6>
                        <h6><i class='bx bxl-linkedin' ></i>:               </h6>
                        <h6><i class='bx bxl-twitter'></i>:               </h6>
                        <h6><i class='bx bxl-github'></i>:               </h6>
                        <h6><i class='bx bxl-youtube'></i>:               </h6>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default AddDevs