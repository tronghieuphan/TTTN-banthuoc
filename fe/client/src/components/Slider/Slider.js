import React from "react";
import "./Slider";
import { Container, Carousel, Image } from "react-bootstrap";

function Slider() {
    const customers = [
        {
            link: "https://i.imgur.com/pYueUC4.png",
        },
        {
            link: "https://i.imgur.com/G2wwVQV.png",
        },
        {
            link: "https://i.imgur.com/5VPJ4Th.png",
        },
    ];
    return (
        <Container className="customers-container mt-4 mx-2 w-100 h-50">
            <Carousel className="customers-carousel-container">
                {customers.map((data,index) => (
                    <Carousel.Item className="customers-carousel-item " key={index}>
                        <Image
                            className="d-block customers-carousel-img w-100 rounded-5"
                            src={data.link}
                            alt=""
                        />
                        <Carousel.Caption className="customers-carousel-caption">
                            <h5 className="customers-caption-title">{data.name}</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    );
}
export default Slider;
