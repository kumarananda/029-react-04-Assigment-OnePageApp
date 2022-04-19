


import React, { useState } from 'react';
import { Card, Col, Container, Row, Table, Button, Form, Alert } from 'react-bootstrap';
import  'boxicons';
import './Admin.css'
import ReactLogo from './ReactLogo/ReactLogo';
import { Link } from 'react-router-dom';
import aveterimg from './avatar.webp'


const AddDevs = () => {

    // from input with useState
    const [devinput, setDevinput ] = useState({
        name : '',
        uName : '',
        cell: '',
        photo : '',
        email : '',
        skill: '',
        gender : '',
        yt : '',
        git : '',
        tw : '',
        lin : '',
        fb :'',
        status: false

    });
    let {name, uName, cell, photo, email, skill, gender, yt, git, tw, lin, fb } = devinput;



  return (
    <section className='my-3 addDevs '>
        <Container>
            <Row>
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
                                                <Col md={3}>
                                                <Card.Img src={ photo?photo:aveterimg } />
                                                </Col>
                                                <Col className='anemasion' >
                                                    <p>User Name</p>
                                                    <h5>{uName ? uName :"will show hare"}</h5>
                                                    <p>Call</p>
                                                    <h6>{cell ? cell :"will show hare"}</h6>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                    <Card className='anemasion'>
                                        <Card.Body >
                                            
                                            <p>Name: </p> <h5>{ name ? name :"will show hare" }</h5>
                                            <p>Email: </p> <h5>{ email ? email :"will show hare" }</h5>
                                            <p>Genger: </p> <h6> {gender ? gender :"will show hare"}</h6>
                                            <p>Skill: </p> <h6>{skill ? skill :"will show hare"}</h6>
                                            <hr />
                                            <h6><i class='bx bxl-facebook'></i>:    {fb ? fb  :"will show hare"}           </h6>
                                            <h6><i class='bx bxl-linkedin' ></i>:   {lin ? lin :"will show hare"}            </h6>
                                            <h6><i class='bx bxl-twitter'></i>:     {tw ? tw :"will show hare"}          </h6>
                                            <h6><i class='bx bxl-github'></i>:      {git ? git :"will show hare"}         </h6>
                                            <h6><i class='bx bxl-youtube'></i>:     {yt ? yt :"will show hare"}          </h6>
                                        </Card.Body>
                                        <div className='anemasionC'>
                                          <Link className='btn btn-success btn-sm' to="/">Back All Devs</Link>
                                        </div>
                                    </Card>
                                </Col>
                                <Col md={8}>
                                    <Row> <Col></Col><Col md={6}><Alert variant={"danger"} className="text-center" show={true}>{"message"}</Alert></Col></Row>
                                    
                                    <Form >
                                        <Row>
                                            <Col md={6}>
                                                <div className="mb-1">
                                                    <Form.Label>Name</Form.Label>
                                                    <Form.Control value={ name } onChange={e => setDevinput(  { ...devinput, name : e.target.value }  )} type="text"  />
                                                </div>
                                                <div className="mb-1">
                                                    <Form.Label>User name</Form.Label>
                                                    <Form.Control value={ uName } onChange={e => setDevinput(  { ...devinput, uName : e.target.value }  )} type="text"  />
                                                </div>
                                                <div className="my-1">
                                                    <Form.Label>Cell No.</Form.Label>
                                                    <Form.Control value={ cell } onChange={e => setDevinput(  { ...devinput, cell : e.target.value }  )} type="text"  />
                                                </div>
                                                <div className="mb-1">
                                                    <Form.Label>Photo</Form.Label>
                                                    <Form.Control value={ photo } onChange={e => setDevinput(  { ...devinput, photo : e.target.value }  )} />
                                                </div>
                                                <div className="mb-1">
                                                    <Form.Label>Email address</Form.Label>
                                                    <Form.Control value={ email } onChange={e => setDevinput(  { ...devinput, email : e.target.value }  )} />
                                                </div>
                                                <div className="mb-1">
                                                    <Form.Label>Skill</Form.Label>
                                                    <Form.Control value={ skill } onChange={e => setDevinput(  { ...devinput, skill : e.target.value }  )} />
                                                </div>
                                                <div className="my-1">
                                                    <span>Gender</span>
                                                    <div className='mt-0'>
                                                        <input type="radio" id="Male" name='gender' value='Male' onChange={e => setDevinput( { ...devinput, gender : e.target.value } )} /> <label htmlFor="Male">Male</label> &nbsp;
                                                        <input type="radio" id="Female" name='gender'  value='Female' onChange={e => setDevinput( { ...devinput, gender : e.target.value } )} /> <label htmlFor="Female">Female</label>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                        
                                                <div className="mb-1">
                                                    <Form.Label>Facebook</Form.Label>
                                                    <Form.Control value={ fb } onChange={e => setDevinput(  { ...devinput, fb : e.target.value }  )} />

                                                </div>
                                                <div className="mb-1">
                                                    <Form.Label>Linkedin</Form.Label>
                                                    <Form.Control value={ lin } onChange={e => setDevinput(  { ...devinput, lin : e.target.value }  )} />

                                                </div>
                                                <div className="mb-1">
                                                    <Form.Label>Twitter</Form.Label>
                                                    <Form.Control value={ tw } onChange={e => setDevinput(  { ...devinput, tw : e.target.value }  )} />

                                                </div>
                                                <div className="mb-1">
                                                    <Form.Label>Github</Form.Label>
                                                    <Form.Control value={ git } onChange={e => setDevinput(  { ...devinput, git : e.target.value }  )} />

                                                </div>
                                                <div className="mb-1">
                                                    <Form.Label>Youtube</Form.Label>
                                                    <Form.Control value={ yt } onChange={e => setDevinput(  { ...devinput, yt : e.target.value }  )} />

                                                </div>
                                                <div className="mb-1">
                                                    <Form.Label>Facebook</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter email" />
                                                </div>
                                                <Button className='w-100' variant="primary" type="submit">Submit</Button>
                                    
                                            </Col>
                                        </Row>
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