


import React from 'react';
import { Card, Col, Container, Row, Table, Button, Form } from 'react-bootstrap';
import  'boxicons';
import './Header.css'
import ReactLogo from '../Admin/ReactLogo/ReactLogo';


const Header = () => {
  return (
    <section className='headerbg'>
        <Container >
            <Row>
                <Col className='my-3 header '>
                    <div className="header_logo"><a href=""> <ReactLogo/></a>  
                    <a href=""><h5 className=''>ReactOnePageApp</h5> </a>                  
                    </div>
                    <div className="header_menu">
                        <ul>
                            <li><a href="#">All Devs</a></li>
                            <li><a href="#">Dashbord</a></li>
                        </ul>
                    </div>
                    <div className="header_button">
                        <a href="" className=''> Add Devs</a>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Header