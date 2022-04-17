
import React from 'react';
import { Card, Col, Container, Row, Table } from 'react-bootstrap';
import 'boxicons';
import './Admin.css'


const Admin = () => {
  return (
    <section className='my-3 admin'>
        <Container fluid>
            <Row className='d-flex  justify-content-center profile-item align-items-center  '>
                <Col md={1}>
                    <Card>
                        <Card.Header>
                            <h2>Add Developers Data</h2>
                        </Card.Header>
                        <Card.Body>

                        </Card.Body>
                        <Card.Footer>

                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={11}>
                    <Card>
                        <Card.Header>
                            <h2>All Developers Data</h2>
                        </Card.Header>
                        <Card.Body>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Name</th>
                                        <th>User Name</th>
                                        <th>Email</th>
                                        <th>Gender</th>
                                        <th>Skill</th>
                                        <th>Call</th>
                                        <th>Photo</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Ananda</td>
                                        <td>Ananda44</td>
                                        <td>anandasaha484@gmail.com</td>
                                        <td>Male</td>
                                        <td>MERN Stack</td>
                                        <td>01913918163</td>
                                        <td><img style={{width:"40px", height:"40px"}} src="https://www.team.gsamdani.com/wp-content/uploads/2016/05/tm1.jpg" alt="" /></td>
                                        <td>
                                            <ul className='d-flex all_devs_action'>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                        <Card.Footer>

                        </Card.Footer>
                    </Card>
                </Col>

            </Row>
        </Container>
    </section>
  )
}

export default Admin