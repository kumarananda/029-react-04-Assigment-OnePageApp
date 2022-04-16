
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import 'boxicons'
import './Team.css'

const Team = () => {
  return (
    <section className='team'>
        <Container>
            <Row>
                <Col md={3} className="my-3">
                    <Card>
                        <Card.Img src="https://www.team.gsamdani.com/wp-content/uploads/2016/05/tm1.jpg"/>
                        <Card.Body>
                            <div className="data">
                                <h4>Name: Ananda Kumar Saha</h4>
                                <h5>User name: ananda44</h5>
                                <h6>Email: anandasaha484@gmail.com</h6>
                                <h6>Genger: Male</h6>
                                <span>Skill: MERN Stack</span>
                            </div>
                            <div className="social">
                                <ul className='d-flex'>
                                    <li><a href="https://www.facebook.com/"><i class='bx bxl-facebook'></i></a></li>
                                    <li><a href="https://www.facebook.com/"><i class='bx bxl-linkedin' ></i></a></li>
                                    <li><a href="https://www.facebook.com/"><i class='bx bxl-twitter'></i></a></li>
                                    <li><a href="https://www.facebook.com/"><i class='bx bx-envelope' ></i></a></li>
                                    
                                </ul>
                            </div>

                             
                        </Card.Body>
                        <Card.Footer>

                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Team