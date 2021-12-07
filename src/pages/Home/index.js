import './style.css';
import NavBar from '../../globalComponents/navbar/Navbar.js';
import Footer from '../../globalComponents/footer/Footer.js';
import { useEffect, useState } from 'react';
import CardHamburgueria from '../../globalComponents/cardHamburgueria';

import api from '../../config/api';

function Home() {
  const [searchText, setSearchText] = useState('');
  const [hamburguerias, setHamburguerias] = useState([]);

  useEffect(() => {
    getHamburguerias();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  const handleSearchText = (event) => {
    setSearchText(event.target.value);
  };

  const getHamburguerias = async () => {
    const { data } = await api.get('hamburguerias');
    setHamburguerias(data);
  };

  return (
    <>
      <NavBar></NavBar>
      <div className="content">
        <div className="home-ps">
          <p className="home-text">Nunca foi tão fácil montar seu lanche</p>
          <p className="home-text">Venha descobrir</p>
        </div>

        <form className="form-search">
          <div className="form-input">
            <input
              type="text"
              value={searchText}
              onChange={handleSearchText}
              placeholder="Buscar Restaurantes"
              id="searchText"
            />

            <button
              type="button"
              className="form-button"
              onClick={() => {
                console.log(searchText);
              }}
            >
              <p>Buscar</p>
            </button>
          </div>
        </form>

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

export default Home;
