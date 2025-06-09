import '../styles/Services.css';
import services from '../hooks/data/services.js';

const Services = () => {
    return (
        <section className="services padding" id="services">
            <div className="services-container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h3 className="title mb-3">Services</h3>
                            <p>Blending tech with flair, I craft smart, scalable solutions that look good and work even better. From sleek software and intelligent data insights to seamless cloud journeys, AI-driven inovations, and digital campaigns that turn heads—these services are designed to grow bold ideas into standout experiences.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {services.map((service, index) => (
                        <div className="col-lg-6" key={index}>
                            <div className="single-service">
                                <i className={service.icon}></i>
                                <h4 className="title">{service.title}</h4>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
