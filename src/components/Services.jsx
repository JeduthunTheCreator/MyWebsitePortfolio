import '../styles/Services.css';


const services = [
    {
        icon: 'fa-solid fa-laptop-code fa-2x',
        title: 'Software Development',
        description: 'Custom-built apps and platforms with clean code, sleek design, and smart functionality. Whether it’s a portfolio, a platform, or a product MVP, I bring ideas to life with full-stack precision.',
    },
    {
        icon: 'fa-solid fa-chart-line fa-2x',
        title: 'Data Analysis',
        description: 'Numbers don’t lie—but they do need translating. I turn raw data into real stories and strategic decisions that move your business forward.',
    },
    {
        icon: 'fa-solid fa-bullhorn fa-2x',
        title: 'Digital Marketing',
        description: 'Eye-catching campaigns and content strategies that connect with real people. From social buzz to brand voice, I help your digital presence stand out and stay relevant.',
    },
    {
        icon: 'fa-solid fa-cloud-arrow-up fa-2x',
        title: 'Cloud Migration',
        description: 'Seamless transitions to the cloud with scalability, security, and speed in mind. I modernize your infrastructure so it’s lighter, faster, and future-ready.',
    },
    {
        icon: 'fa-solid fa-robot fa-2x',
        title: 'AI Integration',
        description: 'Smarter systems, sharper insights—powered by artificial intelligence. I embed AI into your workflows to automate, predict, and personalize with confidence.',
    }
];

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
