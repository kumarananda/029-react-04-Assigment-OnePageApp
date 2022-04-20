
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Team = () => {

  const [ devs, setDevs] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:5050/developers`).then(res => {
      setDevs(res.data);
      console.log(res.data);
    }).catch(err => {
      console.log(err);
    })

  },[devs])
  // console.log(devs);

  return (
    <>
        <Container>
            <Row className=''  >
              {
                devs.map(data =>
                  <Col md={2} className="my-3 ">
                  <Card>
                    <Card.Img src={ data.photo }/>
                    <Card.Body>
                      <h6>{data.name}</h6>
                      <span>{data.cell}</span>
                    </Card.Body>
                    <Card.Footer>
                      <Link to={`/profile/${data.id}`} className='btn btn-sm btn-success'>View Detiles</Link>
                    </Card.Footer>
                  </Card>
                
                </Col>
                  
                  
                  )
              }
            
                
            </Row>
        </Container>
    
    
    
    </>
  )
}

export default Team;