import React, { Component } from 'react';

import Container from '../../components/Container';
import Checkbox from '../../components/Checkbox';
import { Form, Logo } from './styles';

export default class Main extends Component {
  state = {
    checked: true,
  };

  // Carregar os dados do localStorage
  componentDidMount() {}

  // Salvar os dados no localStorage
  // componentDidUpdate(_, prevState) {}

  handleInputChange = e => {
    this.setState({ checked: e.target.checked });
  };

  render() {
    const { checked } = this.state;

    return (
      <>
        <header>
          <Logo />
          {checked && <h1>EU ESTOU CHECADO</h1>}
        </header>
        <Container>
          <Form onSubmit={this.handleSubmit} error={null}>
            <label htmlFor="new">
              <Checkbox
                id="new"
                checked={checked}
                onChange={this.handleInputChange}
              />
              Novos
            </label>
            <label htmlFor="used">
              <Checkbox
                id="used"
                checked={checked}
                onChange={this.handleInputChange}
              />
              Usados
            </label>
          </Form>
        </Container>
      </>
    );
  }
}
