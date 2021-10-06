import './style.css';
import NavBar from '../../globalComponents/navbar/Navbar.js';
import Footer from '../../globalComponents/footer/Footer.js';
import Lanche from './components/lanche';

import logoHamburgueria from '../../images/logohamburgueria.png';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

function Buy() {
  const { id } = useParams();

  const [itensInCart, setItensInCart] = useState([]);

  const handleAddLancheAtCart = (item) => {
    setItensInCart([...itensInCart, item]);
  };

  const handleRemoveLancheAtCart = (item) => {
    var temporary_list = [];

    itensInCart.map((e) => (e.id !== item.id ? temporary_list.push(e) : null));

    setItensInCart(temporary_list);
  };

  return (
    <>
      <NavBar></NavBar>
      <div className="content">
        <div className="lanches">
          <Lanche
            onClick={() =>
              handleAddLancheAtCart({
                name: 'X-Burguer',
                price: 'R$7,00',
                id: 1,
              })
            }
            onRemove={() =>
              handleRemoveLancheAtCart({
                name: 'X-Burguer',
                price: 'R$7.00',
                id: 1,
              })
            }
            title="X-Burguer"
            price="R$7.00"
            image={logoHamburgueria}
          />
          <Lanche
            onClick={() =>
              handleAddLancheAtCart({
                name: 'X-Burguer',
                price: 'R$7,00',
                id: 2,
              })
            }
            onRemove={() =>
              handleRemoveLancheAtCart({
                name: 'X-Burguer',
                price: 'R$7.00',
                id: 2,
              })
            }
            title="X-Burguer"
            price="R$7.00"
            image={logoHamburgueria}
          />
          <Lanche
            onClick={() =>
              handleAddLancheAtCart({
                name: 'X-Burguer',
                price: 'R$7,00',
                id: 3,
              })
            }
            onRemove={() =>
              handleRemoveLancheAtCart({
                name: 'X-Burguer',
                price: 'R$7.00',
                id: 3,
              })
            }
            title="X-Burguer"
            price="R$7.00"
            image={logoHamburgueria}
          />
          <Lanche
            onClick={() =>
              handleAddLancheAtCart({
                name: 'X-Burguer',
                price: 'R$7,00',
                id: 4,
              })
            }
            onRemove={() =>
              handleRemoveLancheAtCart({
                name: 'X-Burguer',
                price: 'R$7.00',
                id: 4,
              })
            }
            title="X-Burguer"
            price="R$7.00"
            image={logoHamburgueria}
          />
          <Lanche
            onClick={() =>
              handleAddLancheAtCart({
                name: 'X-Burguer',
                price: 'R$7,00',
                id: 5,
              })
            }
            onRemove={() =>
              handleRemoveLancheAtCart({
                name: 'X-Burguer',
                price: 'R$7.00',
                id: 5,
              })
            }
            title="X-Burguer"
            price="R$7.00"
            image={logoHamburgueria}
          />
          <Lanche
            onClick={() =>
              handleAddLancheAtCart({
                name: 'X-Burguer',
                price: 'R$7,00',
                id: 6,
              })
            }
            onRemove={() =>
              handleRemoveLancheAtCart({
                name: 'X-Burguer',
                price: 'R$7.00',
                id: 6,
              })
            }
            title="X-Burguer"
            price="R$7.00"
            image={logoHamburgueria}
          />
          <Lanche
            onClick={() =>
              handleAddLancheAtCart({
                name: 'X-Burguer',
                price: 'R$7,00',
                id: 7,
              })
            }
            onRemove={() =>
              handleRemoveLancheAtCart({
                name: 'X-Burguer',
                price: 'R$7.00',
                id: 7,
              })
            }
            title="X-Burguer"
            price="R$7.00"
            image={logoHamburgueria}
          />
          <Lanche
            onClick={() =>
              handleAddLancheAtCart({
                name: 'X-Burguer',
                price: 'R$7,00',
                id: 8,
              })
            }
            onRemove={() =>
              handleRemoveLancheAtCart({
                name: 'X-Burguer',
                price: 'R$7.00',
                id: 8,
              })
            }
            title="X-Burguer"
            price="R$7.00"
            image={logoHamburgueria}
          />
          <Lanche
            onClick={() =>
              handleAddLancheAtCart({
                name: 'X-Burguer',
                price: 'R$7,00',
                id: 9,
              })
            }
            onRemove={() =>
              handleRemoveLancheAtCart({
                name: 'X-Burguer',
                price: 'R$7.00',
                id: 9,
              })
            }
            title="X-Burguer"
            price="R$7.00"
            image={logoHamburgueria}
          />
          <Lanche
            onClick={() =>
              handleAddLancheAtCart({
                name: 'X-Burguer',
                price: 'R$7,00',
                id: 10,
              })
            }
            onRemove={() =>
              handleRemoveLancheAtCart({
                name: 'X-Burguer',
                price: 'R$7.00',
                id: 10,
              })
            }
            title="X-Burguer"
            price="R$7.00"
            image={logoHamburgueria}
          />
          <Lanche
            onClick={() =>
              handleAddLancheAtCart({
                name: 'X-Burguer',
                price: 'R$7,00',
                id: 11,
              })
            }
            onRemove={() =>
              handleRemoveLancheAtCart({
                name: 'X-Burguer',
                price: 'R$7.00',
                id: 11,
              })
            }
            title="X-Burguer"
            price="R$7.00"
            image={logoHamburgueria}
          />
          <Lanche
            onClick={() =>
              handleAddLancheAtCart({
                name: 'X-Bacon',
                price: 'R$14,00',
                id: 12,
              })
            }
            onRemove={() =>
              handleRemoveLancheAtCart({
                name: 'X-Bacon',
                price: 'R$14.00',
                id: 12,
              })
            }
            title="X-Bacon"
            price="R$14.00"
            image={logoHamburgueria}
          />
        </div>

        <button
          onClick={() => console.log(itensInCart)}
          style={{ cursor: 'pointer' }}
        >
          test
        </button>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Buy;
