


import React from 'react';
import { Card, Col, Container, Row, Table, Button, Form } from 'react-bootstrap';
import  'boxicons';
import './Footer.css'



const Footer = () => {
  return (
    <section className='footerbg mt-2'>
        <Container >
            <Row>
                <Col className='footer_content'>
                    <h6>All rights reserved</h6>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Footer