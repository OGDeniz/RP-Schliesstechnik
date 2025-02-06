// components/ui/Slider.jsx
import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { Carousel } from "react-bootstrap";
import styles from "styles/global.module.css" ;


const Slider = ({ images, className }) => {
    if (!Array.isArray(images)) {
        return null;
    }
    
    return (
        <div className={`${styles.container}`}>
            <Carousel className={`${className || ''} rounded shadow`}>
                {images.map((image, index) => (
                    <Carousel.Item key={index}>
                        <div className="position-relative" style={{ aspectRatio: '16/9' }}>
                        <Image
                            src={image.url}
                            alt={image.alt}
                            fill
                            priority={index === 0}
                            quality={75}
                            loading={index === 0 ? "eager" : "lazy"}
                            style={{ objectFit: 'cover' }}
                            className="rounded"
                        />
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

Slider.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired
        })
    ).isRequired,
    className: PropTypes.string
};

export default Slider;