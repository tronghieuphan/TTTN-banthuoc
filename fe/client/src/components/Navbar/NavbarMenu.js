import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import "./Nav.scss";
function NavbarMenu() {
    return (
        <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#0644B5" }}>
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div className="row w-100 text-center fw-bold">
                        <Nav className="me-auto link">
                            <NavLink className="col-2" to="/" acticveClassName="active">
                                {/* <NavDropdown
                                    className="col-2 link hover-nav"
                                    title="Dropdown"
                                    menuVariant="white"
                                >
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                </NavDropdown> */}
                                Lo
                            </NavLink>

                            <NavLink className="col-2" to="/login">
                                Features
                            </NavLink>

                            <NavLink className="col-2" to="/register">
                                Features
                            </NavLink>
                            <NavLink className="col-2" to="/shopping">
                                Features
                            </NavLink>
                            <NavLink className="col-2" to="/cart">
                                Features
                            </NavLink>
                            <NavLink className="col-2" to="/detail">
                                Features
                            </NavLink>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarMenu;
