import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


function Restaurantcard({ data }) {
    return (
        <Container>
            <Row>
                {
                    data.map(i =>
                        <Col sm={6} md={4} lg={3}>
                            <Link to={`restaurantview/${i.id}`} style={{textDecoration:'none'}}>
                                <div className='text-center p-4 mt-' >
                                    <Card className='' style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={i.photograph} className='trans' style={{ height: 300 }} />
                                        <Card.Body className='bg-light text-dark'>
                                            <Card.Title><strong>{i.name}</strong></Card.Title>
                                            <Card.Text>
                                                {i.address}
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>

                                </div>

                            </Link>                        
                            
                            </Col>

                    )
                }
            </Row>

        </Container>)
}

export default Restaurantcard