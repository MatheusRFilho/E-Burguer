import './style.css';

const CardHamburgueria = ({ image, text }) => {
  return (
    <div className="card-hamburgueria">
      {image != null ? (
        <img src={image} alt="text" className="hamburgueria-logo"></img>
      ) : null}
      <p>{text}</p>
    </div>
  );
};

export default CardHamburgueria;
