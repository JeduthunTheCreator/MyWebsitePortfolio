import { Link } from 'react-router-dom';
import backgroundImg from '/Images/Beige 2.jpg'

const Portfolio = () => {
    return (
        <>
            <section className="Portfolio" style={{ backgroundImage: `url(${backgroundImg})` }}>

                <div className="Hero pt-24 md:pt-40 lg:pt-52 bg-no-repeat bg-fixed bg-center" >
                    <Link to="/" className="nav text-center text-white  hover:text-gray-600 text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg">Home</Link>
                    <Link to="/portfolio" className="nav text-center text-white  hover:text-gray-600 text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg">Portfolio</Link>
                </div>

            </section>
        </>
    );
};

export default Portfolio;
