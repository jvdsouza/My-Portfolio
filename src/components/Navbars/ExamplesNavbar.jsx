import React from "react";
import './Navbar.css';
// reactstrap components
import {
  Collapse,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

class PagesNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent"
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.changeColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeColor);
  }
  changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      this.setState({
        color: "bg-info"
      });
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setState({
        color: "navbar-transparent"
      });
    }
  };
  toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  onCollapseExiting = () => {
    this.setState({
      collapseOut: "collapsing-out"
    });
  };
  onCollapseExited = () => {
    this.setState({
      collapseOut: ""
    });
  };
  render() {
    return (
      <Navbar
        className={"fixed-top " + this.state.color}
        color-on-scroll="100"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <button
              aria-expanded={this.state.collapseOpen}
              value="navbar-translate"
              aria-label="navbar-translate"
              className="navbar-toggler navbar-toggler"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className={"justify-content-end " + this.state.collapseOut}
            navbar
            isOpen={this.state.collapseOpen}
            onExiting={this.onCollapseExiting}
            onExited={this.onCollapseExited}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                    <p className="menu">Menu</p>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button
                    aria-expanded={this.state.collapseOpen}
                    value="navbar-collapse"
                    aria-label="navbar-collapse"
                    className="navbar-toggler"
                    onClick={this.toggleCollapse}
                  >
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav navbar>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://www.linkedin.com/in/jason-d-souza-861762100/"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Connect with me on LinkedIn"
                >
                  <i className="fab fa-linkedin"></i>
                  <p className="d-lg-none d-xl-none">LinkedIn</p>
                </NavLink>
              </NavItem>

              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://github.com/jvdsouza"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Check out my GitHub"
                >
                  <i className="fab fa-github-square"></i>
                  <p className="d-lg-none d-xl-none">Github</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink 
                  href="https://jasonsveryownblog.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="#About">
                  About Me
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="#Projects">
                  Projects
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="#Contact">
                  Contact Me
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default PagesNavbar;
