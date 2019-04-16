import React from "react";
// core components
import PagesNavbar from "components/Navbars/ExamplesNavbar.jsx";
import PageHeader from "components/PageHeader/PageHeader.jsx";
import MainBody from "components/Main/Main.jsx";
// import Footer from "components/Footer/Footer.jsx";

class Index extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("index-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }
  render() {
    return (
      <div>
        <PagesNavbar />
        <div className="wrapper">
          <PageHeader />
          <div id="main">
            <MainBody />
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    );
  }
}

export default Index;
