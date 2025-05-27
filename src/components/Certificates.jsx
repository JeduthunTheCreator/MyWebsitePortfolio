import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/Certificates.css';

const certificates = [
    {
        name: "Microsoft Certified: Azure Fundamentals",
        company: "Microsoft",
        image: "/Images/Azure4.png",
        text: "Validated understanding of core cloud concepts, Azure services, and governance tools.",
    },
    {
        name: "Microsoft Certified: Azure AI Fundamentals",
        company: "Microsoft",
        image: "/Images/Azure4.png",
        text: "Demonstrated foundational knowledge of AI and machine learning concepts, and the Azure services that support them.",
    },
    {
        name: "WorldHost: Principles of Customer Service",
        company: "People 1st International",
        image: "/Images/people1st2.jpeg",
        text: "Equipped with essential customer service skills, including effective communication, managing expectations, and creating lasting impressions.",
    },
    {
        name: "Barclays Destination Hospitality Course",
        company: "Barclays",
        image: "/Images/Barclays2.png",
        text: "Completed comprehensive training and work experience to launch a career in hospitality, leisure, or tourism.",
    },
    {
        name: "The Digital College Accreditation: Retail Skills and Values",
        company: "The Digital College",
        image: "/Images/TDC.jpeg",
        text: "Developed key communication and customer service skills essential for the retail sector.",
    },
];

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
