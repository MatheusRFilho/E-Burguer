import './style.css';
import NavBar from '../../globalComponents/navbar/Navbar.js';
import Footer from '../../globalComponents/footer/Footer.js';
import { useState } from 'react';
import validator from 'validator';
import api from '../../config/api';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { login } from '../../features/slice';

function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);

  const dispatch = useDispatch();

  const validateEmail = (email) => {
    if (validator.isEmail(email)) {
      setEmailError(false);
      return false;
    } else {
      setEmailError(true);
      return true;
    }
  };

  const validatePassword = (pass) => {
    if (
      validator.isStrongPassword(pass, {
        minSymbols: 0,
      })
    ) {
      setPassError(false);
      return false;
    } else {
      setPassError(true);
      return true;
    }
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handlePassword = (event) => {
    validatePassword(event.target.value);
    setPassword(event.target.value);
  };

  const handleEmail = (event) => {
    validateEmail(event.target.value);
    setEmail(event.target.value);
  };

  const handleEmailLogin = (event) => {
    validateEmail(event.target.value);
    setEmailLogin(event.target.value);
  };

  const handlePasswordLogin = (event) => {
    validatePassword(event.target.value);
    setPasswordLogin(event.target.value);
  };

  let history = useHistory();

  const notifyError = () =>
    toast.error('Email ou senha estão errados!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        color: '#000',
      },
      bodyStyle: {
        backgroundColor: '#f00',
      },
      closeButton: false,
    });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post('sign-in', {
        email: emailLogin,
        password: passwordLogin,
      });
      dispatch(
        login({
          email: emailLogin,
          token: data.token,
          isHamburgueria: data.admin,
          name: data.name,
          id: data.id,
          loggedIn: true,
        }),
      );

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
                <label>Senha</label>
                <input
                  type="password"
                  value={password}
                  onChange={handlePassword}
                  placeholder=""
                  id="password"
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
                  });
                }}
              >
                <p>Cadastrar</p>
              </button>
            </div>
          </form>
          <form className="form-search-login" onSubmit={() => handleLogin}>
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
                onClick={handleLogin}
              >
                <p>Entrar</p>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default Login;
