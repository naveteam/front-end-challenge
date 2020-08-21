import React from "react";
import Header from "../components/Header/index";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Header></Header>
        <div>
          <h1>Navers</h1>
        </div>
      </>
    );
  }
}

export default HomePage;
