import React, { Component } from 'react';

import Container from '../../components/Container';
import Checkbox from '../../components/Checkbox';
import Select from '../../components/Select';
import { data } from '../../components/Select/data';
import { Form, Logo, Header, ContainerSelect, GroupSelect } from './styles';

export default class Main extends Component {
  state = {
    newCarChecked: false,
    usedCarChecked: false,
  };

  // Carregar os dados do localStorage
  componentDidMount() {}

  // Salvar os dados no localStorage
  // componentDidUpdate(_, prevState) {}

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  render() {
    const { newCarChecked, usedCarChecked } = this.state;

    return (
      <>
        <Header>
          <Logo />
        </Header>
        <Container>
          <Form onSubmit={this.handleSubmit} error={null}>
            <label htmlFor="new">
              <Checkbox
                id="new"
                name="newCarChecked"
                checked={newCarChecked}
                onChange={this.handleInputChange}
              />
              Novos
            </label>
            <label htmlFor="used">
              <Checkbox
                id="used"
                name="usedCarChecked"
                checked={usedCarChecked}
                onChange={this.handleInputChange}
              />
              Usados
            </label>
            <ContainerSelect>
              <GroupSelect>
                <Select options={data} />
                <Select options={data} />
                <Select options={data} />
              </GroupSelect>
              <GroupSelect>
                <Select options={data} />
                <Select options={data} />
                <Select options={data} />
              </GroupSelect>
            </ContainerSelect>
          </Form>
        </Container>
      </>
    );
  }
}
