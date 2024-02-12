import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link'; 
function Navegacao() {
  return (
    <>
      <Navbar expand="lg">
        <Navbar.Brand href="#home">Viagem</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/login">Iniciar Sessão</Nav.Link>
          <Nav.Link href="/contatos"> Entre em Contato</Nav.Link>
        </Nav>
      </Navbar>
    
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </>
  );
}

export default Navegacao;
