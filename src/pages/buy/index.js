import './style.css';
import NavBar from '../../globalComponents/navbar/Navbar.js';
import Footer from '../../globalComponents/footer/Footer.js';
import Lanche from './components/lanche';

import logoHamburgueria from '../../images/logohamburgueria.png';
// import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import api from '../../config/api';

function CreateLanche() {
  const { id } = useParams();

  const [itensInCart, setItensInCart] = useState([]);
  const [lanches, setLanches] = useState([]);

  useEffect(() => {
    getLanches();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  const getLanches = async () => {
    const { data } = await api.get(`lanche/${id}`);
    setLanches(data);
  };

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
      <div className="contentLanches">
        <div>
          <div className="lanches">
            {lanches.map((item) => {
              return (
                <Lanche
                  onClick={() =>
                    handleAddLancheAtCart({
                      name: item.name,
                      price: `R$${item.price}`,
                      id: item._id,
                    })
                  }
                  onRemove={() =>
                    handleRemoveLancheAtCart({
                      name: item.name,
                      price: `R$${item.price}`,
                      id: item._id,
                    })
                  }
                  title={item.name}
                  price={`R$${item.price}`}
                  description={item.description}
                />
              );
            })}
          </div>
          <div
            style={{
              display: 'flex',
            }}
          >
            {/* <button
              onClick={() => console.log(itensInCart)}
              style={{
                cursor: 'pointer',
                backgroundColor: 'transparent',
                border: '1px solid black',
                padding: '10px 20px',
                justifySelf: 'center',
                alignSelf: 'center',
                margin: '20px auto',
                borderRadius: '5px',
              }}
            >
              Concluir Compra
            </button> */}
          </div>
        </div>
        {/* <div>
          <h1>Falta criar a parte de criar um lanche customizavel</h1>
        </div> */}
      </div>
      <Footer></Footer>
    </>
  );
}

export default CreateLanche;
