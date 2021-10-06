import './style.css';
import NavBar from '../../globalComponents/navbar/Navbar.js';
import Footer from '../../globalComponents/footer/Footer.js';
import { useState } from 'react';
import CardHamburgueria from '../../globalComponents/cardHamburgueria';

import logoHamburgueria from '../../images/logohamburgueria.png';

function Home() {
  const [searchText, setSearchText] = useState('');

  const handleSearchText = (event) => {
    setSearchText(event.target.value);
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
          <CardHamburgueria image={logoHamburgueria} text="test" id="2" />
          <CardHamburgueria text="test" id="1" />
          <CardHamburgueria text="test" id="1" />
          <CardHamburgueria text="test" id="1" />
          <CardHamburgueria text="test" id="1" />
          <CardHamburgueria text="test" id="1" />
          <CardHamburgueria text="test" id="1" />
          <CardHamburgueria text="test" id="1" />
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;
