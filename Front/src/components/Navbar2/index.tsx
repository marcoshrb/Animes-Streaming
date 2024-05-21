import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import style from './Navbar2.module.css';

function NavBarComponent() {
  return (
    <Navbar className={style["navbar"]} bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home"><img src='../../../src/assets/img/LogoT.png' width={"150px"}/></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;