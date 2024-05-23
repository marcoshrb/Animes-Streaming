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
  function UserList() {
    navigate('../user_list')
  }
  function Catalog() {
    navigate('../catalog')
  }

  return (
    <Navbar className={style["navbar"]} bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home"><img src='../../../src/assets/img/LogoT.png' width={"150px"} /></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">

          <Navbar.Brand className={style.drop}>
            <NavDropdown title="Configurações" id="basic-nav-dropdown">
              <NavDropdown.Item >
                <Button variant="dark" onClick={Home}>Home</Button>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <Button variant="dark" onClick={AddMovie}>Adicionar Filme</Button>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <Button variant="dark" onClick={UserList}>Lista de usuários</Button>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <Button variant="dark" onClick={Catalog}>Catálogo</Button>
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Brand>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;