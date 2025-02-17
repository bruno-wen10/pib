import { useEffect, useState } from "react";
//import styled component
import { Container,Arrow, Image   } from "./styled";
//import images
//import LogoPib from '../../../assets/img/logoPIB.png'
import Encontro from '../../../assets/img/images-photos/encontro.jpg'
import Image2 from '../../../assets/img/images-photos/imagem jobens.jpg'

const images = [
    
    Encontro,
    Image2,
];

const HomeImages = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    useEffect(() => {
        const interval = setInterval(()=>{
            handleNext()
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <Container>
            <Arrow direction="left" onClick={handlePrev}>
                &#9664;
            </Arrow>
            <Image src={images[currentIndex]} alt="Slideshow image" />
            <Arrow direction="right" onClick={handleNext}>
                &#9654;
            </Arrow>
        </Container>
    );
};

export default HomeImages;