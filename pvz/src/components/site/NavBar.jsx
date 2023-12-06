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
            <span className="navElement">
              <Link to="/">home</Link>
            </span>
            {/* <Navbar.Brand href="#home">
              <Link to="/">home</Link>
            </Navbar.Brand> */}
            <Nav className="navElements">
              <span className="navElement">
                <Link to="/stand">ledai</Link>
              </span>
              <span className="navElement">
                <Link to="/pricelist">products</Link>
              </span>
              <span className="navElement">
                <Link to="/foodproducts">food products</Link>
              </span>
              <span className="navElement">
                <Link to="/foodproductsapi">fp api</Link>
              </span>
              <span className="navElement">
                <Link to="/productform">product form</Link>
              </span>
              <span className="navElement">
                <Link to="/test">test</Link>
              </span>
            </Nav>
          </Container>
        </Navbar>
      </>
    </>
  );
};

export default NavBar;
