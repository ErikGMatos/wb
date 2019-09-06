import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';

import api from '../../services/api';

import Container from '../../components/Container';
import { Form, Logo } from './styles';

export default class Main extends Component {
  state = {
    model: '',
  };

  // Carregar os dados do localStorage
  componentDidMount() {}

  // Salvar os dados no localStorage
  componentDidUpdate(_, prevState) {}

  handleInputChange = e => {};

  handleSubmit = async e => {};

  render() {
    const { model } = this.state;

    return (
      <>
        <header>
          <Logo />
        </header>
        <Container>
          <Form onSubmit={this.handleSubmit} error={null} />
        </Container>
      </>
    );
  }
}
