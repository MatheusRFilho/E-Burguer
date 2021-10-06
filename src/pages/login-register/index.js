import './style.css';
import NavBar from '../../globalComponents/navbar/Navbar.js';
import Footer from '../../globalComponents/footer/Footer.js';
import { useState } from 'react';

function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleConfirmEmail = (event) => {
    setConfirmEmail(event.target.value);
  };

  const handleEmailLogin = (event) => {
    setEmailLogin(event.target.value);
  };

  const handlePasswordLogin = (event) => {
    setPasswordLogin(event.target.value);
  };

  return (
    <>
      <NavBar></NavBar>
      <div className="content">
        <div className="forms-login-research">
          <form className="form-search-login">
            <div className="form-input-first">
              <div className="form-input-fale-conosco">
                <label>Nome</label>
                <input
                  type="text"
                  value={name}
                  onChange={handleName}
                  placeholder="Kalil Fidelis"
                  id="name"
                />
              </div>

              <div className="form-input-fale-conosco">
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmail}
                  placeholder="kalil@fidelis.com"
                  id="email"
                />
              </div>

              <div className="form-input-fale-conosco">
                <label>Confirme o seu email</label>
                <input
                  type="email"
                  value={confirmEmail}
                  onChange={handleConfirmEmail}
                  placeholder="kalil@fidelis.com"
                  id="confirmEmail"
                />
              </div>

              <div className="form-input-fale-conosco">
                <label>Senha</label>
                <input
                  type="password"
                  value={password}
                  onChange={handlePassword}
                  placeholder=""
                  id="password"
                />
              </div>

              <div className="form-input-fale-conosco">
                <label>Confirme a sua senha</label>
                <input
                  type="text"
                  value={confirmPassword}
                  onChange={handleConfirmPassword}
                  placeholder=""
                  id="confirmPassword"
                />
              </div>
              <br />
              <br />

              <button
                type="button"
                className="form-button"
                onClick={() => {
                  console.log({
                    name,
                    email,
                    password,
                    confirmEmail,
                    confirmPassword,
                  });
                }}
              >
                <p>Cadastrar</p>
              </button>
            </div>
          </form>
          <form className="form-search-login">
            <div className="form-input">
              <div className="form-input-fale-conosco">
                <label>Email</label>
                <input
                  type="email"
                  value={emailLogin}
                  onChange={handleEmailLogin}
                  placeholder="kalil@fidelis.com"
                  id="emailLogin"
                />
              </div>

              <div className="form-input-fale-conosco">
                <label>Senha</label>
                <input
                  type="password"
                  value={passwordLogin}
                  onChange={handlePasswordLogin}
                  placeholder=""
                  id="passwordLogin"
                />
              </div>
              <br />
              <br />
              <button
                type="button"
                className="form-button"
                onClick={() => {
                  console.log({
                    emailLogin,
                    passwordLogin,
                  });
                }}
              >
                <p>Entrar</p>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Login;
