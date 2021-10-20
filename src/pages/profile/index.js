// import './style.css';
import NavBar from '../../globalComponents/navbar/Navbar.js';
import Footer from '../../globalComponents/footer/Footer.js';

function Profile() {
  return (
    <>
      <NavBar></NavBar>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'center',
          margin: 'auto',
          height: '85vh',
        }}
      >
        <div
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            alignSelf: 'center',
          }}
        >
          <p
            style={{
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            Nome:
            <p
              style={{
                fontSize: 20,
                fontWeight: 400,
              }}
            >
              Matheus Rodrigo
            </p>
          </p>
          <p
            style={{
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            Número:
            <p
              style={{
                fontSize: 20,
                fontWeight: 400,
              }}
            >
              (12)991403532
            </p>
          </p>
          <p
            style={{
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            Email:
            <p
              style={{
                fontSize: 20,
                fontWeight: 400,
              }}
            >
              matheus@email.com
            </p>
          </p>
        </div>

        <div
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            alignSelf: 'center',
            marginLeft: '20px',
          }}
        >
          <p
            style={{
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            Endereços
          </p>
          <div>
            <hr />
            <div>
              <p
                style={{
                  fontSize: 20,
                  fontWeight: 400,
                }}
              >
                Logradouro: Rua Padre Gebardo
              </p>
              <p
                style={{
                  fontSize: 20,
                  fontWeight: 400,
                }}
              >
                Numero: 432
              </p>
              <p
                style={{
                  fontSize: 20,
                  fontWeight: 400,
                }}
              >
                Bairro: Santa Rita
              </p>
              <p
                style={{
                  fontSize: 20,
                  fontWeight: 400,
                }}
              >
                Cidade: Aparecida
              </p>
            </div>
            <hr />
            <div>
              <p
                style={{
                  fontSize: 20,
                  fontWeight: 400,
                }}
              >
                Logradouro: Rua Padre Gebardo
              </p>
              <p
                style={{
                  fontSize: 20,
                  fontWeight: 400,
                }}
              >
                Numero: 432
              </p>
              <p
                style={{
                  fontSize: 20,
                  fontWeight: 400,
                }}
              >
                Bairro: Santa Rita
              </p>
              <p
                style={{
                  fontSize: 20,
                  fontWeight: 400,
                }}
              >
                Cidade: Aparecida
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Profile;
