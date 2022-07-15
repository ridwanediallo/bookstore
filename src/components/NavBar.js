import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { GoPerson } from 'react-icons/go';
import './NavBar.css';

const NavBar = () => (
  <Navbar collapseOnSelect className="navig" expand="lg" bg="" variant="dark">
    <div className="container navB py-3 px-5">
      <Navbar.Brand href="#home" className=" text-primary logo">
        BookStore CMS
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto align-self-center">
          <Nav.Link href="#book">
            <Link to="/" className="text-secondary link">
              Books
            </Link>
          </Nav.Link>
          <Nav.Link href="#categories">
            <Link to="/categories" className="text-secondary link">
              Categories
            </Link>
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#icon">
            <IconContext.Provider value={{ color: '#0290ff', size: '1em' }}>
              <div className="userIcon">
                <GoPerson />
              </div>
            </IconContext.Provider>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </div>
  </Navbar>
);

export default NavBar;
