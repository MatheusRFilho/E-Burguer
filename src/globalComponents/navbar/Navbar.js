import './NavBar.css';

import logo from '../../images/logo.png';

const NavBar = ({ activeItem }) => {
  return (
    <div className="nav-bar">
      <div className="nav-bar-div">
        <a className="link" href="/">
          Pagina Inicial
        </a>
      </div>
      <div className="nav-bar-div">
        {activeItem === 'hamburguerias' ? (
          <a className="link" href="/pedidos">
            Pedidos
          </a>
        ) : (
          <a className="link" href="/hamburguerias">
            Hamburguerias
          </a>
        )}
      </div>
      <div className="nav-bar-div">
        <a className="link" href="/">
          <img src={logo} alt="E-Burguer" className="nav-image" />
        </a>
      </div>
      <div className="nav-bar-div">
        <a className="link" href="/fale-conosco">
          Fale Conosco
        </a>
      </div>
      <div className="nav-bar-div">
        <a className="link login" href="/">
          Entrar
        </a>
      </div>
    </div>
  );
};

export default NavBar;
