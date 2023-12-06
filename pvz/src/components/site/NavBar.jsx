import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      {/* <ul>
        <li></li>
        <li>
          <Link to="/stand">ledai</Link>
        </li>
        <li>
          <Link to="/pricelist">products</Link>
        </li>
        <li>
          <Link to="/test">test</Link>
        </li>
      </ul> */}

      <>
        <Navbar className="navBar" bg="dark" data-bs-theme="white">
          <Container className="navContainer">
            <Navbar.Brand href="#home">
              <Link to="/">home</Link>
            </Navbar.Brand>
            <Nav className="navElements">
              <Nav.Link className="navElement" href="#home">
                <Link to="/stand">ledai</Link>
              </Nav.Link>
              <Nav.Link className="navElement" href="#features">
                <Link to="/pricelist">products</Link>
              </Nav.Link>
              <Nav.Link className="navElement" href="#features">
                <Link to="/foodproducts">food products</Link>
              </Nav.Link>
              <Nav.Link className="navElement" href="#features">
                <Link to="/foodproductsapi">fp api</Link>
              </Nav.Link>
              <Nav.Link className="navElement" href="navElement">
                <Link to="/test">test</Link>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </>
  );
};

export default NavBar;
