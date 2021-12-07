import './style.css';
import NavBar from '../../globalComponents/navbar/Navbar.js';
import Footer from '../../globalComponents/footer/Footer.js';
import { useState } from 'react';
import CardHamburgueria from '../../globalComponents/cardHamburgueria';

import logoHamburgueria from '../../images/logohamburgueria.png';

function Pedidos() {
  const [searchText, setSearchText] = useState('');

  const handleSearchText = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <>
      <NavBar></NavBar>
      <div className="content">
        <div className="pedidos-div">
          <div className="firstDiv">
            <form className="form-search">
              <div className="form-input">
                <input
                  type="text"
                  value={searchText}
                  onChange={handleSearchText}
                  placeholder="Buscar Pedidos"
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

            <div className="hamburguerias-card">
              <CardHamburgueria image={logoHamburgueria} text="test" />
              <CardHamburgueria text="test" />
              <CardHamburgueria text="test" />
              <CardHamburgueria text="test" />
              <CardHamburgueria text="test" />
              <CardHamburgueria text="test" />
              <CardHamburgueria text="test" />
              <CardHamburgueria text="test" />
            </div>
          </div>
          {/* <div className="secondDiv">
            <h4>Pedidos em andamento</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div> */}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Pedidos;
