import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';

function Singleview() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [allUser, setUser] = useState([])
    const params = useParams()
    const getUser = async () => {
        const result = await fetch('/restaurants.json')
        result.json().then(data => {
            setUser(data.restaurants)

        })
    }

    useEffect(() => {
        // console.log(params);
        getUser()
    }, [])

    const singleUser = allUser.find(i => i.id == params.id)


    return (

        <>
            {
                singleUser ?
                    <section class="py-5">
                        <div class="container px-4 px-lg-5 my-5">
                            <div class="row gx-4 gx-lg-5 align-items-center">
                                <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0 trans" src={singleUser.photograph} alt="..." style={{ height: 500, width: 450, borderTopRightRadius: 30 }} /></div>
                                <div class="col-md-6 ">
                                    <h1 class=" mb-1 fw-bolder">{singleUser.name}</h1>
                                    <h3 class=""><span className='text-primary'>Neighbourhood</span> - {singleUser.neighborhood}</h3>
                                    <div class="fs-5 mb-5">
                                        <span><span className='text-primary'>Address</span> - {singleUser.address}</span>
                                        <p class="lead"><span className='text-primary'>Cuisine Type</span> - {singleUser.cuisine_type}</p>

                                    </div>
                                    <div class="d-flex">
                                        <Button variant="primary" onClick={handleShow}>
                                            OPERATING HOURS
                                        </Button>

                                        <Modal show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title className='text-primary'><i class="fa-solid fa-house-chimney-window"></i> <b>OPERATING HOURS</b></Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <h4><span className='text-primary'>Monday</span> - {singleUser.operating_hours.Monday}</h4>
                                                <h4><span className='text-primary'>Tuesday</span> - {singleUser.operating_hours.Tuesday}</h4>
                                                <h4><span className='text-primary'>Wednesday</span> - {singleUser.operating_hours.Wednesday}</h4>
                                                <h4><span className='text-primary'>Thursday</span> - {singleUser.operating_hours.Thursday}</h4>
                                                <h4><span className='text-primary'>Friday</span> - {singleUser.operating_hours.Friday}</h4>
                                                <h4><span className='text-primary'>Saturday</span> - {singleUser.operating_hours.Saturday}</h4>
                                                <h4><span className='text-primary'>Sunday</span> - {singleUser.operating_hours.Sunday}</h4>

                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button className='bg-primary' variant="secondary" onClick={handleClose}>
                                                    Close
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </div>
                                    <div className='mt-2'>
                                        <Accordion defaultActiveKey="0">
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header ><span className='text-primary'>Reviews</span></Accordion.Header>
                                                <Accordion.Body>
                                                    <h3 className='text-primary'>{singleUser.reviews[0].name}</h3>
                                                    <p>{singleUser.reviews[0].date}</p>
                                                    <p>{singleUser.reviews[0].rating}</p>
                                                    <p>{singleUser.reviews[0].comments}</p>
                                                    <hr className='text-primary' />
                                                    <h3 className='text-primary'>{singleUser.reviews[1].name}</h3>
                                                    <p>{singleUser.reviews[1].date}</p>
                                                    <p>{singleUser.reviews[1].rating}</p>
                                                    <p>{singleUser.reviews[1].comments}</p>
                                                    <hr className='text-primary' />
                                                    <h3 className='text-primary'>{singleUser.reviews[2].name}</h3>
                                                    <p>{singleUser.reviews[2].date}</p>
                                                    <p>{singleUser.reviews[2].rating}</p>
                                                    <p>{singleUser.reviews[2].comments}</p>


                                                </Accordion.Body>
                                            </Accordion.Item>

                                        </Accordion>

                                    </div>                                </div>
                            </div>
                        </div>
                    </section> : ""

            }

        </>
    )
}





export default Singleview