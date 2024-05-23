import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;