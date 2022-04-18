


import React, { useState } from 'react';
import { Card, Col, Container, Row, Table, Button, Form } from 'react-bootstrap';
import  'boxicons';
import './Admin.css'
import ReactLogo from './ReactLogo/ReactLogo';
import { Link } from 'react-router-dom';


const AddDevs = () => {

    // from input with useState
    const [devinput, setDevinput ] = useState({
        name : '',
        uName : '',
        cell: '',
        photo : '',
        email : '',
        gender : '',
        yt : '',
        git : '',
        tw : '',
        lin : '',
        fb :''

    });
    let {name, uName, cell, photo, email, gender, yt, git, tw, lin, fb } = devinput;

console.log(devinput);


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
                        <Card.Header> <h3 className='text-center'>Add Developers Data</h3></Card.Header>
                        <Card.Body>
                     
                            <Row>
                                <Col md={4}>
                                    <Card>
                                        <Card.Body>
                                        <h4>Preview</h4>
                                            <Row>
                                                <Col>
                                                <Card.Img src={ photo } />
                                                </Col>
                                                <Col>
                                                    <span>User Name</span>
                                                    <h5>{uName}</h5>
                                                    <span>Call</span>
                                                    <h6>{cell}</h6>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                    <Card className='anemasion'>
                                        <Card.Body >
                                        <h5>Name: <p>{ name }</p></h5>
                                        <h5>Email: <p>{ email }</p></h5>
                                        <h6>Genger: {gender}</h6>
                                        <h6>Skill: MERN Stack</h6>
                                        <hr />
                                        <h6><i class='bx bxl-facebook'></i>:    {fb}           </h6>
                                        <h6><i class='bx bxl-linkedin' ></i>:   {lin}            </h6>
                                        <h6><i class='bx bxl-twitter'></i>:     {tw}          </h6>
                                        <h6><i class='bx bxl-github'></i>:      {git}         </h6>
                                        <h6><i class='bx bxl-youtube'></i>:     {yt}          </h6>
                                        </Card.Body>
                                        <div className='anemasionC'>
                                            {/* <ReactLogo></ReactLogo> */}
                                        </div>
                                    </Card>
                                </Col>
                                <Col md={8}>
                                    <Form >
                                        <div className="my-1">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control value={ name } onChange={e => setDevinput(  { ...devinput, name : e.target.value }  )} type="text"  />
                                        </div>
                                        <div className="my-1">
                                            <Form.Label>User name</Form.Label>
                                            <Form.Control value={ uName } onChange={e => setDevinput(  { ...devinput, uName : e.target.value }  )} type="text"  />
                                        </div>
                                        <div className="my-1">
                                            <Form.Label>Cell No.</Form.Label>
                                            <Form.Control value={ cell } onChange={e => setDevinput(  { ...devinput, cell : e.target.value }  )} type="text"  />
                                        </div>
                                        <div className="my-1">
                                            <Form.Label>Photo</Form.Label>
                                            <Form.Control value={ photo } onChange={e => setDevinput(  { ...devinput, photo : e.target.value }  )} />
                                        </div>
                                        <div className="my-1">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control value={ email } onChange={e => setDevinput(  { ...devinput, email : e.target.value }  )} />
                                        </div>
                                        <div className="my-1">
                                            <span>Gender</span>
                                            <div className='mt-0'>
                                                <input type="radio" id="Male" name='gender' value='Male' onChange={e => setDevinput( { ...devinput, gender : e.target.value } )} /> <label htmlFor="Male">Male</label> &nbsp;
                                                <input type="radio" id="Female" name='gender'  value='Female' onChange={e => setDevinput( { ...devinput, gender : e.target.value } )} /> <label htmlFor="Female">Female</label>
                                            </div>
                                        </div>
                                        
                                        <div className="my-1">
                                            <Form.Label>Facebook</Form.Label>
                                            <Form.Control value={ fb } onChange={e => setDevinput(  { ...devinput, fb : e.target.value }  )} />

                                        </div>
                                        <div className="my-1">
                                            <Form.Label>Linkedin</Form.Label>
                                            <Form.Control value={ lin } onChange={e => setDevinput(  { ...devinput, lin : e.target.value }  )} />

                                        </div>
                                        <div className="my-1">
                                            <Form.Label>Twitter</Form.Label>
                                            <Form.Control value={ tw } onChange={e => setDevinput(  { ...devinput, tw : e.target.value }  )} />

                                        </div>
                                        <div className="my-1">
                                            <Form.Label>Github</Form.Label>
                                            <Form.Control value={ git } onChange={e => setDevinput(  { ...devinput, git : e.target.value }  )} />

                                        </div>
                                        <div className="my-1">
                                            <Form.Label>Youtube</Form.Label>
                                            <Form.Control value={ yt } onChange={e => setDevinput(  { ...devinput, yt : e.target.value }  )} />

                                        </div>
                                        <div className="my-1">
                                            <Form.Label>Facebook</Form.Label>
                                            <Form.Control type="text" placeholder="Enter email" />
                                        </div>
                                    <Button className='w-100' variant="primary" type="submit">Submit</Button>
                                    </Form>
                                </Col>
                            </Row>
                            
                        
                        </Card.Body>
                    </Card>


                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default AddDevs