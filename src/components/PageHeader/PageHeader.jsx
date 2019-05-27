import React from "react";
import './PageHeader.css'

// reactstrap components
import { Container } from "reactstrap";

class PageHeader extends React.Component {
  render() {
    return (
      <div className="page-header header-filter">
        <Container>
          <div className="content-center brand">
            <h1 className="h1-seo">Jason D'souza</h1>
            <h3>
              <span><div className="line"></div> Full Stack Web Developer <div className="line"></div></span>
            </h3>
            <h4>
            Fervently working on Javascript and Python projects
            </h4>
            <a href="#main" aria-label="Go to the main section of my portfolio">
              <div className="animated-arrow animated infinite pulse">
                <i className="fas fa-angle-down animated fadeInUp"></i>
              </div>
            </a>
          </div>
          
        </Container>
      </div>
    );
  }
}

export default PageHeader;
