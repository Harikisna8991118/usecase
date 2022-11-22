import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../actions/userActions";

function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <h1>
                {" "}
                <i class="fas fa-ice-cream"></i> Arun
              </h1>
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <h5>
              <LinkContainer to="/cart">
                <Nav.Link>
                  Cart
                </Nav.Link>
              </LinkContainer></h5>
              {userInfo ? (
                <h5>
                  <NavDropdown title={userInfo.name} id="username">
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>
                        <i className="fa-solid fa-cog fa-spin"></i> Settings
                      </NavDropdown.Item>
                    </LinkContainer>

                    <NavDropdown.Item onClick={logoutHandler}>
                      <i class="fa-sharp fa-solid fa-arrow-right-from-bracket"></i>{" "}
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </h5>
              ) : (
                <h5>
                  <LinkContainer to="/login">
                    <Nav.Link>
                      <i className="fas fa-user"></i>
                      Login
                    </Nav.Link>
                  </LinkContainer>
                </h5>
              )}
              {userInfo && userInfo.isAdmin && (
                <h5>
                  {" "}
                  <NavDropdown title="Admin" id="adminmenue">
                    <LinkContainer to="/admin/userlist">
                      <NavDropdown.Item>
                        <i className="fas fa-user"></i> Users
                      </NavDropdown.Item>
                    </LinkContainer>

                    <LinkContainer to="/admin/productlist">
                      <NavDropdown.Item>
                        <i class="fas fa-ice-cream"></i> Products
                      </NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                </h5>
              )}
              &emsp;&emsp;&emsp;
              <Navbar.Brand>
                <marquee
                  width="100%"
                  direction="left"
                  height="50px"
                  scrollamount="20"
                >
                  <h2 variant="dark">
                    “Find happiness within.” – Marble Slab Creamery ice cream
                    and dessert stores
                  </h2>
                </marquee>
              </Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
