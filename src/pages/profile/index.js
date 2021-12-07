// import './style.css';
import NavBar from '../../globalComponents/navbar/Navbar.js';
import Footer from '../../globalComponents/footer/Footer.js';

function Profile() {
  const name = localStorage.getItem('name');
  const email = localStorage.getItem('email');

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
              {name}
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
              {email}
            </p>
          </p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Profile;
