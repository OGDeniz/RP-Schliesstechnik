// components/ui/Slider.jsx
import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { Carousel } from "react-bootstrap";
import sliderStyles from "../../styles/slider.module.css";


const Slider = ({ images, className }) => {
    if (!Array.isArray(images)) {
        return null;
    }

    return (
        <div className={sliderStyles.sliderContainer}>
            <Carousel className={`${sliderStyles.carousel} ${className || ''}`}>
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
                                style={{ objectFit: 'inherit' }}
                                className="rounded-top"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

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