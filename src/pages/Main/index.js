import React, { Component } from 'react';

import { MdChevronRight } from 'react-icons/md';
import Container from '../../components/Container';
import Checkbox from '../../components/Checkbox';
import Select from '../../components/Select';
import { data } from '../../components/Select/data';
import {
  Form,
  Logo,
  Header,
  ContainerSelect,
  GroupCheckbox,
  AdvancedSearch,
  FilterClear,
  SeeOffers,
} from './styles';

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
            <GroupCheckbox>
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
            </GroupCheckbox>

            <ContainerSelect>
              <div>
                <Select options={data} placeholder="Select a fruit" />
                <Select options={data} />
                <Select options={data} />
              </div>
              <div>
                <Select options={data} />
                <Select options={data} />
                <Select options={data} />
              </div>
            </ContainerSelect>

            <AdvancedSearch>
              <div>
                <MdChevronRight size={20} />
                <a href="#!">Busca avançada</a>
              </div>

              <div>
                <FilterClear>Limpar filtros</FilterClear>
                <SeeOffers>Ver ofertas</SeeOffers>
              </div>
            </AdvancedSearch>
          </Form>
        </Container>
      </>
    );
  }
}
