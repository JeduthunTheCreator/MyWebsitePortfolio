import "../styles/Logo.css"

const Logo = ({ className }) => {
    return (
        <a href="/" className={`logo ${className}`}>
            <img
                src="/natural-innovations-logo.webp"
                alt="Natural Innovations"
                className="logo-image"
            />
        </a>
    );
};

export default Logo;