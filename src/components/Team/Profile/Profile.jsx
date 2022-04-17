
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import 'boxicons';
import './Profile.css'


const Profile = () => {
  return (
    <section className='profile'>
        <Container>
            <Row className='d-flex  justify-content-center profile-item align-items-center  '>

                <Col md={8} className="my-3  ">
                    <Card  className='bg-lite bg-primary'>
                        <Card.Header className='text-center'>
                        <h2>Developers Detiles</h2>
                        </Card.Header>
                        <Card.Body>
                            
                            <Row className='bg-lite'>
                                <Col>
                                    <Card className='p_img'>
                                    <Card.Img  src="https://www.team.gsamdani.com/wp-content/uploads/2016/05/tm1.jpg"/>
                                    </Card>
                                </Col>
                                <Col className='d-flex  justify-content-center profile-content align-items-center'>
                                    <div className="data text-center">
                                        <h4>Ananda Kumar Saha</h4>
                                        <h5>User name: ananda44</h5>
                                        <h6>Email: anandasaha484@gmail.com</h6>
                                        <h6>Genger: Male</h6>
                                        <h6>Skill: MERN Stack</h6>
                                        <span>Cell: 01913918163</span>
                                    </div>
                                    <div className="social">
                                        <ul className=''>
                                            <li><a href="https://www.facebook.com"><i class='bx bxl-facebook'></i></a></li>
                                            <li><a href="https://www.linkedin.com"><i class='bx bxl-linkedin' ></i></a></li>
                                            <li><a href="https://twitter.com"><i class='bx bxl-twitter'></i></a></li>
                                            <li><a href="#"><i class='bx bxl-github'></i></a></li>
                                            <li><a href="https://www.youtube.com"><i class='bx bxl-youtube'></i></a></li>

                                        </ul>
                                    </div>
                                    
                                </Col>
                            </Row>
                        
                        </Card.Body>
                        <Card.Footer className='text-end'>
                            <a className='btn btn-success btn-sm' href="#">Back All Devs</a>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Profile