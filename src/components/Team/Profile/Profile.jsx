
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import 'boxicons';
import './Profile.css'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


const Profile = () => {


    // set all devdlopers data on "getSdevs" using useState
    const [getSdevs , setGetSdevs] = useState({})

    //Profile params
    const  prams  = useParams();

    // console.log(prams);

    // get single data 
    useEffect(() => {
        axios.get('http://localhost:5050/developers/' + prams.id).then(res => {
            setGetSdevs(res.data)
        })
    },[]);



  return (
    <section className='profile'>
        <Container>
            <Row className='d-flex  justify-content-center profile-item align-items-center  '>

                <Col md={8} className="my-3  ">
                    <Card  className='bg-lite bg-info'>
                        <Card.Header className='text-center'>
                        <h2>Developers Detiles</h2>
                        </Card.Header>
                        <Card.Body>
                            
                            <Row className='bg-lite'>
                                <Col>
                                    <Card className='p_img'>
                                    <Card.Img  src={getSdevs.photo}/>
                                    </Card>
                                </Col>
                                <Col className='d-flex  justify-content-center profile-content align-items-center'>
                                    <div className="data text-center">
                                        <h4>{getSdevs.name}</h4>
                                        <h5>User name: {getSdevs.uName}</h5>
                                        <h6>Email: {getSdevs.email}</h6>
                                        <h6>Genger: {getSdevs.gender}</h6>
                                        <h6>Skill: {getSdevs.skill}</h6>
                                        <span>Cell: {getSdevs.cell}</span>
                                    </div>
                                    <div className="social">
                                        <ul className=''>
                                            {
                                                getSdevs.fb && <li><a href={getSdevs.fb}><i class='bx bxl-facebook'></i></a></li>
                                            }
                                            { getSdevs.lin && <li><a href={getSdevs.lin}><i class='bx bxl-linkedin' ></i></a></li>}
                                            { getSdevs.lin && <li><a href={getSdevs.lin}><i class='bx bxl-linkedin' ></i></a></li>}
                                            { getSdevs.git && <li><a href={getSdevs.git}><i class='bx bxl-github' ></i></a></li>}
                                            { getSdevs.yt && <li><a href={getSdevs.yt}><i class='bx bxl-youtube' ></i></a></li>}
                                        </ul>
                                    </div>
                                    
                                </Col>
                            </Row>
                        
                        </Card.Body>
                        <Card.Footer className='text-end'>
                            <Link className='btn btn-success btn-sm' to={`/editDevs/${getSdevs.id}`}>Edit data</Link> &nbsp;
                            <Link className='btn btn-success btn-sm' to="/">Back All Devs</Link>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Profile