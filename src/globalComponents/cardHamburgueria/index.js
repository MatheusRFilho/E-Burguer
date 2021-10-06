import { Link } from 'react-router-dom';
import './style.css';

const CardHamburgueria = ({ image, text, id }) => {
  return (
    <Link to={`/hamburgueria/${id}`} className="desactivated">
      <div className="card-hamburgueria">
        {image != null ? (
          <img src={image} alt="text" className="hamburgueria-logo"></img>
        ) : null}
        <p>{text}</p>
      </div>
    </Link>
  );
};

export default CardHamburgueria;
