
import './notFound.css';

const NotFound: React.FC = () => {
  return (
    <div className="nf-container">
      <div className="nf-content">
        {/* Animated Icon Wrapper */}
        <div className="nf-image-wrapper">
          <img 
            src="/warning.png" 
            alt="Warning Icon" 
            className="nf-icon" 
          />
        </div>

        <h1 className="nf-title">Page not found!</h1>
        
        <p className="nf-description">
          The page you're looking for does not exist or <br className="desktop-br" /> 
          has been moved.
        </p>

        <button className="nf-button" onClick={() => window.location.href = '/'}>
          Go Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;