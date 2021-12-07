import { useState } from 'react';
import './lanche.css';

function Lanche({ onClick, title, price, image, onRemove, description }) {
  const [activated, setActivated] = useState(false);

  const handleClick = () => {
    activated ? onRemove() : onClick();
    setActivated(!activated);
  };
  return (
    <button
      onClick={handleClick}
      className={activated ? 'lanche-button-activated' : 'lanche-button'}
    >
      {image != null ? (
        <img src={image} alt="text" className="lanche-logo"></img>
      ) : null}
      <p>{title}</p>
      <p>{price}</p>
      <p>{description}</p>
    </button>
  );
}

export default Lanche;
