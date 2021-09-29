import './style.css';
import NavBar from '../../globalComponents/navbar/Navbar.js';
import Footer from '../../globalComponents/footer/Footer.js';
import { useState } from 'react';

function FaleConosco() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [reclamation, setReclamation] = useState('');

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleReclamation = (event) => {
    setReclamation(event.target.value);
  };

  return (
    <>
      <NavBar></NavBar>
      <div className="content">
        <form className="form-fale-conosco">
          <div className="form-fale-conosco-first-half">
            <div className="form-input-fale-conosco">
              <label>Nome</label>
              <input
                type="text"
                value={name}
                onChange={handleName}
                placeholder="Matheus Rodrigo"
                id="searchText"
              />
            </div>

            <div className="form-input-fale-conosco">
              <label>Email</label>
              <input
                type="text"
                value={email}
                onChange={handleEmail}
                placeholder="SeuEmail@gmail.com"
                id="searchText"
              />
            </div>

            <div className="form-input-fale-conosco">
              <label>Telefone</label>
              <input
                type="text"
                value={phone}
                onChange={handlePhone}
                placeholder="(12)99999-9999"
                id="searchText"
              />
            </div>

            <button
              type="button"
              className="form-button-fale-conosco"
              onClick={() => {
                console.log('a');
              }}
            >
              <p>Buscar</p>
            </button>
          </div>
          <div className="form-fale-conosco-second-half">
            <div className="form-input-fale-conosco">
              <label>Digite aqui</label>
              <textarea
                type="text"
                value={reclamation}
                onChange={handleReclamation}
                placeholder="Escreva sua Reclamação aqui"
                id="searchText"
              />
            </div>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
}

export default FaleConosco;
