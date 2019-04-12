import React from "react";

// core components
import PagesNavbar from "components/Navbars/ExamplesNavbar.jsx";
import PageHeader from "components/PageHeader/PageHeader.jsx";
import Footer from "components/Footer/Footer.jsx";

class Index extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("index-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }
  render() {
    return (
      <>
        {/* <IndexNavbar /> */}
        <PagesNavbar />
        <div className="wrapper">
          <PageHeader />
          <div className="main">
          </div>
          {/* <Footer /> */}
        </div>
      </>
    );
  }
}

export default Index;
