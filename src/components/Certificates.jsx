import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/Certificates.css';
import certificates from '../hooks/data/certificates';

const Certificates = () => {
    return (
        <section id="certificates" className="certificates section light-background">
            <div className="certificate-container" data-aos="fade-up" data-aos-delay="100">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    speed={600}
                    autoplay={{ delay: 5000 }}
                    slidesPerView={'auto'}
                    pagination={{ clickable: true }}
                >
                    {certificates.map((certificate, index) => (
                        <SwiperSlide key={index}>
                            <div className="certificate-item">
                                <div className="row gy-4 justify-content-center">
                                    <div className="col-lg-6">
                                        <div className="certificate-content">
                                            <p>
                                                <i className="bi bi-quote quote-icon-left"></i>
                                                <span>{certificate.text}</span>
                                                <i className="bi bi-quote quote-icon-right"></i>
                                            </p>
                                            <h3>{certificate.name}</h3>
                                            <h4>{certificate.company}</h4>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 text-center">
                                        <img
                                            src={certificate.image}
                                            className="img-fluid certificate-img"
                                            alt={certificate.name}
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Certificates;
