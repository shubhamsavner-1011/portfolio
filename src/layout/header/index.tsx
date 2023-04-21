import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";

const Header = () => {
  const [clientWindowHeight, setClientWindowHeight] = useState<number | any>();

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;

    if (backgroundTransparacyVar < 1) {
      let paddingVar = 30 - backgroundTransparacyVar * 20;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="nav-font"
        style={{
          background: `rgba(255, 255, 255, ${backgroundTransparacy})`,
          padding: `${padding}px 0px`,
          boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
        }}
      >
        <Container>
          <Navbar.Brand href="#home" className="navlinks brand">
            SHUBHAM
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className=" justify-content-end"
          >
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#home" className="mx-4 navlinks">
                Home
              </Nav.Link>
              <Nav.Link href="#technology" className="mx-4 navlinks">
                Technology
              </Nav.Link>
              <Nav.Link href="#experience" className="mx-4 navlinks">
                Experience
              </Nav.Link>
              <Nav.Link href="#portfolio" className="mx-4 navlinks">
                Portfolio
              </Nav.Link>
              <Nav.Link href="#contact" className="mx-4 contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
