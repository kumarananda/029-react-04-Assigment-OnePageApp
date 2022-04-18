


import React from 'react';
import { Card, Col, Container, Row, Table, Button, Form } from 'react-bootstrap';
import  'boxicons';
import './Admin.css'
import ReactLogo from './ReactLogo/ReactLogo';
import { Link } from 'react-router-dom';


const EditDevs = () => {
  return (
    <section className='my-3 addDevs '>
        <Container>
            <Row>
                {/* <Col md={3}>
                    <><Card>
                        <div className="react_mark">
                            
                        </div>
                    </Card></>
                    
                </Col> */}
                <Col md={12}>
                    <Card>
                        <Card.Header> <h3 className='text-center'>Edit Developers Data</h3></Card.Header>
                        <Card.Body>
                        <Form >
                            <Row>
                                <Col md={4}>
                                    <Card>
                                        <Card.Body>
                                        <h4>Edit Preview</h4>
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
                                    <Card className='anemasion'>
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
                                        <div className='anemasionC'>
                                            {/* <ReactLogo></ReactLogo> */}
                                        </div>
                                        
                                    </Card>
                                    <div className=" header_button">
                                        <Link  to="/" className='btn btn-primary'> Back to all devs</Link> &nbsp;
                                        <Link  to="/admin" className='btn btn-primary'> Back to dashbord</Link>
                                    </div>
                                </Col>
                                <Col md={8}>
                                    <div className="my-1">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter name" />
                                    </div>
                                    <div className="my-1">
                                        <Form.Label>User name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter user name" />
                                    </div>
                                    <div className="my-1">
                                        <Form.Label>Cell No.</Form.Label>
                                        <Form.Control type="text" placeholder="Enter phone" />
                                    </div>
                                    <div className="my-1">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="text" placeholder="Enter email" />
                                    </div>
                                    <div className="my-1">
                                        <span>Gender</span>
                                        <div className='mt-0'>
                                            <input type="radio" id="Male" name='gender' value='Male' /> <label htmlFor="Male">Male</label> &nbsp;
                                            <input type="radio" id="Female" name='gender'  value='Female' /> <label htmlFor="Female">Female</label>
                                        </div>
                                    </div>
                                    
                                    <div className="my-1">
                                        <Form.Label>Twitter</Form.Label>
                                        <Form.Control type="text" placeholder="Enter email" />
                                    </div>
                                    <div className="my-1">
                                        <Form.Label>Twitter</Form.Label>
                                        <Form.Control type="text" placeholder="Enter email" />
                                    </div>
                                    <div className="my-1">
                                        <Form.Label>Github</Form.Label>
                                        <Form.Control type="text" placeholder="Enter email" />
                                    </div>
                                    <div className="my-1">
                                        <Form.Label>Youtube</Form.Label>
                                        <Form.Control type="text" placeholder="Enter email" />
                                    </div>
                                    <div className="my-1">
                                        <Form.Label>Facebook</Form.Label>
                                        <Form.Control type="text" placeholder="Enter email" />
                                    </div>
                                <Button className='w-100' variant="primary" type="submit">Submit</Button>
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

export default EditDevs