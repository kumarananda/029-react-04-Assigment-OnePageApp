
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Team = () => {

  // set all devdlopers data on "devs" using useState
  const [ devs, setDevs] = useState([])

  // get all devdlopers data with axios and current time optepmize with useEffect()
  useEffect(() => {
    axios.get(`http://localhost:5050/developers`).then(res => {
      setDevs(res.data);

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
              // show customly with status with using "&&"
              devs.map(data => data.status && 
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