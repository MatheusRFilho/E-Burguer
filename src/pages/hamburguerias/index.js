import './style.css';
import NavBar from '../../globalComponents/navbar/Navbar.js';
import Footer from '../../globalComponents/footer/Footer.js';
import CardHamburgueria from '../../globalComponents/cardHamburgueria';

import { useEffect, useState } from 'react';
import api from '../../config/api';

function Hamburguerias() {
  const [hamburguerias, setHamburguerias] = useState([]);

  useEffect(() => {
    getHamburguerias();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  const getHamburguerias = async () => {
    const { data } = await api.get('hamburguerias');
    setHamburguerias(data);
  };
  return (
    <>
      <NavBar activeItem={'hamburguerias'}></NavBar>
      <div className="content">
        <div className="hamburguerias-cards">
          {hamburguerias.map((item) => {
            return <CardHamburgueria text={item.name} id={item._id} />;
          })}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Hamburguerias;
