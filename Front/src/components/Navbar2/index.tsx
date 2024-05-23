import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import style from './Navbar2.module.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function NavBarComponent() {

  const navigate = useNavigate();
  
  function Home() {
    navigate('../home')
  }
  function AddMovie() {
    navigate('../AddMovie')
  }

  return (
    <Navbar className={style["navbar"]} bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home"><img src='../../../src/assets/img/LogoT.png' width={"150px"}/></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button variant="dark" onClick={Home}>Home</Button>
          <Button variant="dark" onClick={AddMovie}>Adicionar Filme</Button>
        <Navbar.Brand className={style.drop}>
        <NavDropdown title="Configurações" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
        </Navbar.Brand>
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;