// InstagramSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import { Link } from 'react-router-dom';
import "swiper/css";
import "swiper/css/free-mode";
import "../styles/FashionSwiper.css";

const images = [
    "/Images/Port1.jpg",
    "/Images/Stylist.jpeg",
    "/Images/WhiteRose.jpeg",
    "/Images/Port6.jpg",
    "/Images/Port2.jpg",
    "/Images/ZARA.jpeg",
    "/Images/Port3.jpg",
    "/Images/Port4.jpg",
    "/Images/Port5.jpg",
    "/Images/Port7.jpg",
    "/Images/Port8.jpg",
    "/Images/Port9.jpg",
    "/Images/Port10.jpg"
];

const FashionSwiper = () => {
    return (
        <section className="fashion-swiper">
            <Swiper
                slidesPerView={2}
                spaceBetween={10}
                loop={true}
                speed={3000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                freeMode={{
                    enabled: true,
                    momentum: false,
                }}
                grabCursor={false}
                breakpoints={{
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 5 },
                }}
                modules={[FreeMode, Autoplay]}
            >
                {images.map((imgSrc, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="aspect-ratio br-10"> 
                            <img src={imgSrc} alt={`Fashion ${idx + 1}`} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div>
                <Link to="/fashion" className="fashion-btn">
                    Explore my fashion portfolio ➜
                </Link>
            </div>
        </section>
    );
};

export default FashionSwiper;
