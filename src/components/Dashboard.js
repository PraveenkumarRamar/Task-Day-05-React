import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    let nav = useNavigate()
    return <>
        <Carousel style={{width:"35rem",marginLeft:"20%"}} >
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30461.jpg?w=740&t=st=1687492608~exp=1687493208~hmac=e5f13cb5a8e1b4e16562bfaa018c7eb848d4f3c8a53d7414e9935535aec0cd7d'
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 onClick={()=>nav('/users')} style={{cursor:"pointer"}} >List user</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30461.jpg?w=740&t=st=1687492608~exp=1687493208~hmac=e5f13cb5a8e1b4e16562bfaa018c7eb848d4f3c8a53d7414e9935535aec0cd7d"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 onClick={()=>nav('/create-user')} style={{cursor:"pointer"}} >Create user</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30461.jpg?w=740&t=st=1687492608~exp=1687493208~hmac=e5f13cb5a8e1b4e16562bfaa018c7eb848d4f3c8a53d7414e9935535aec0cd7d"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 onClick={()=>nav('/profile')} style={{cursor:"pointer"}} >Profile</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </>
}

export default Dashboard