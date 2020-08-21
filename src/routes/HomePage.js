import React from "react";
import Card from "../components/Card/index";
import TextField from "../components/TextField";
import { Button } from "../styles/styles";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Card>
          <TextField label={"E-mail"} placeholder={"E-mail"}></TextField>
          <TextField label={"Senha"} placeholder={"Senha"}></TextField>
          <Button>Entrar</Button>
        </Card>
      </>
    );
  }
}

export default HomePage;
