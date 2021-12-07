/* eslint-disable no-unused-vars */

import NavBar from '../../globalComponents/navbar/Navbar.js';
import Footer from '../../globalComponents/footer/Footer.js';
import { useState } from 'react';
import validator from 'validator';
import api from '../../config/api';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { login } from '../../features/slice';

function CreateLanche() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  let history = useHistory();

  const handleRegister = async (e) => {
    e.preventDefault();
    const id = localStorage.getItem('id');
    try {
      const { data } = await api.post('lanche', {
        price: price,
        description: description,
        name: name,
        id: id,
      });

      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavBar></NavBar>
      <div className="content">
        <div className="forms-login-research">
          <form className="form-search-login">
            <div className="form-input-first-create-lanche">
              <div className="form-input-fale-conosco">
                <label>Nome</label>
                <input
                  type="text"
                  value={name}
                  onChange={handleName}
                  placeholder="Nome do lanche"
                  id="name"
                />
              </div>

              <div className="form-input-fale-conosco">
                <label>Preço</label>
                <input
                  type="number
                "
                  value={price}
                  onChange={handlePrice}
                  placeholder="Preço do Lanche"
                  id="price"
                />
              </div>

              <div className="form-input-fale-conosco">
                <label>Descrição</label>
                <input
                  // type="password"
                  value={description}
                  onChange={handleDescription}
                  placeholder="Descrição do Lanche"
                  id="description"
                />
              </div>

              <br />
              <br />

              <button
                type="button"
                className="form-button"
                onClick={handleRegister}
              >
                <p>Cadastrar Lanche</p>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default CreateLanche;
