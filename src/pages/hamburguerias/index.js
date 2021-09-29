import './style.css';
import NavBar from '../../globalComponents/navbar/Navbar.js';
import Footer from '../../globalComponents/footer/Footer.js';
import CardHamburgueria from '../../globalComponents/cardHamburgueria';

import logoHamburgueria from '../../images/logohamburgueria.png';

function Hamburguerias() {
  return (
    <>
      <NavBar activeItem={'hamburguerias'}></NavBar>
      <div className="content">
        <div className="hamburguerias-cards">
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
      <Footer></Footer>
    </>
  );
}

export default Hamburguerias;
