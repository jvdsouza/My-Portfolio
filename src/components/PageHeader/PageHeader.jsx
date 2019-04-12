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
            <h1 className="h1-seo animated fadeInUp delay-1s">Jason D'souza</h1>
            <h3 className="d-none d-sm-block animated fadeInUp delay-2s">
              <span><div className="line"></div> Full Stack Web Developer <div className="line"></div></span>
            </h3>
            <h4 className="animated fadeInUp delay-3s">
              Passionate and ever-learning
            </h4>
          </div>
        </Container>
      </div>
    );
  }
}

export default PageHeader;
