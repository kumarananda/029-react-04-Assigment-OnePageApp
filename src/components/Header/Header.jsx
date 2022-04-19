


import React from 'react';
import { Card, Col, Container, Row, Table, Button, Form } from 'react-bootstrap';
import  'boxicons';
import './Header.css'
import ReactLogo from '../Admin/ReactLogo/ReactLogo';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <section className='headerbg mb-2'>
        <Container >
            <Row>
                <Col className=' header '>
                    <div className="header_logo"><Link to="/"> <ReactLogo/></Link>  
                    <Link to="/"><h5 className=''>ReactOnePageApp</h5> </Link>                  
                    </div>
                    <div className="header_menu">
                        <ul>
                            <li><Link to="/">All Devs</Link></li>
                            <li><Link to="/admin">Dashbord</Link></li>
                        </ul>
                    </div>
                    <div className="header_button">
                        <Link  to="/addDevs" className=''> Add Devs</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Header