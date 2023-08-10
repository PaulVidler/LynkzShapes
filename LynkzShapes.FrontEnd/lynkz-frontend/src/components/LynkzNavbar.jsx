import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import LynkzLogo from '../img/logo-white.svg';

function LynkzNavbar() {
  return (
    <>
      <Navbar className="bg-body-tertiary" style={{ backgroundColor: "#032233", paddingLeft: "2rem" }}>
        <Container >
            <img
              alt=""
              src={LynkzLogo}
              width="150"
              height="150"
              className="d-inline-block align-top"
            />
        </Container>
      </Navbar>
    </>
  );
}

export default LynkzNavbar;