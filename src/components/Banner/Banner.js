import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../images/images/Banner/1808486.jpg'
import image3 from '../../images/images/Banner/photo-1602526212101-12eb978b129a.jpg'
import image2 from '../../images/images/Banner/photo-1555092248-9fc883aabb03.jpg'
const Banner = () => {
    return (
        
            <>
           <div>
            <Carousel>
                <Carousel.Item>
                    <img style={{
                        width:'900px',
                        height:'550px'
                    }}
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                    />
                    <Carousel.Caption style={{
                        transform: 'translateY(-50%)',
                        bottom: 'initial',
                        top: '50%'
                    }}>
                        <h1  style={{
                            color:'White'
                        }}>Your Journey Begains</h1>
                        <p>A journey with us. Explore the World</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{
                        width:'900px',
                        height:'550px'
                    }}
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                    />

                    <Carousel.Caption style={{
                        transform: 'translateY(-50%)',
                        bottom: 'initial',
                        top: '50%'
                    }}>
                        <h1 
                        style={{
                            color:'white'
                        }}>What We Offer</h1>
                        <p>A Happy Journey with Nature And Explore new things.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{
                        width:'900px',
                        height:'550px'
                    }}
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                    />

                    <Carousel.Caption style={{
                        transform: 'translateY(-50%)',
                        bottom: 'initial',
                        top: '50%'
                    }}>
                        <h1 
                        style={{
                            color:'white'
                        }}>Are you Ready to go?</h1>
                        <p>Stay with us for Explore the world with Enjoy.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
            </>
    );
};

export default Banner;