import React, { Component } from 'react';

import { MdChevronRight } from 'react-icons/md';
import { FaCarSide, FaMotorcycle } from 'react-icons/fa';
import Container from '../../components/Container';
import Checkbox from '../../components/Checkbox';
import Select from '../../components/Select';
import api from '../../services/api';
import {
  Form,
  Logo,
  Header,
  ContainerSelect,
  GroupCheckbox,
  AdvancedSearch,
  FilterClear,
  SeeOffers,
  ChooseType,
  ChooseVehicle,
  Car,
  MotorCycle,
  TitleCar,
  TitleMotorCycle,
  ButtonSellCar,
} from './styles';

export default class Main extends Component {
  state = {
    error: false,
    make: [],
    makeID: null,
    model: [],
    modelID: null,
    version: [],
    versionID: null,
  };

  // Carregar os dados do localStorage
  async componentDidMount() {
    try {
      this.loadMake();
    } catch (err) {
      this.setState({ error: err.message });
    }
  }

  componentDidUpdate(_, prevState) {
    const { makeID, modelID } = this.state;
    if (prevState.makeID !== makeID) {
      this.loadModel();
      this.removeOption();
    }

    if (prevState.modelID !== modelID && !!modelID) {
      this.loadVersion();
    }
  }

  removeOption = () => {
    this.setState({ version: [], versionID: null });
  };

  removeAllFilters = () => {
    this.setState({
      model: [],
      modelID: null,
      version: [],
      versionID: null,
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  handleSelect = e => {
    this.setState({ [e.name]: e.id });
  };

  loadMake = async () => {
    const response = await api.get('/Make');
    const { data } = response;
    const newMake = data.map(m => ({
      id: m.ID,
      label: m.Name,
      name: 'makeID',
    }));

    this.setState({ make: [...newMake] });
  };

  loadModel = async () => {
    const { makeID } = this.state;

    const response = await api.get(`/Model?MakeID=${makeID}`);
    const { data } = response;
    const newModel = data.map(m => ({
      id: m.ID,
      label: m.Name,
      name: 'modelID',
    }));

    this.setState({ model: [...newModel] });
  };

  loadVersion = async () => {
    const { modelID } = this.state;

    const response = await api.get(`/Version?ModelID=${modelID}`);
    const { data } = response;
    const newVersion = data.map(m => ({
      id: m.ID,
      label: m.Name,
      name: 'versionID',
    }));

    this.setState({ version: [...newVersion] });
  };

  render() {
    const { error, make, model, version } = this.state;

    return (
      <>
        <Header>
          <Logo />
        </Header>
        <ChooseVehicle>
          <ChooseType>
            <Car>
              <FaCarSide size={20} color="#f3123c" />
              <TitleCar>
                <small>comprar</small>
                Carros
              </TitleCar>
            </Car>
            <MotorCycle>
              <FaMotorcycle size={20} color="#f3123c" />
              <TitleMotorCycle>
                <small>comprar</small>
                Carros
              </TitleMotorCycle>
            </MotorCycle>
          </ChooseType>
          <ButtonSellCar>vender meu carro</ButtonSellCar>
        </ChooseVehicle>
        <Container>
          <Form onSubmit={this.handleSubmit} error={error}>
            <GroupCheckbox>
              <label htmlFor="new">
                <Checkbox
                  id="new"
                  name="newCarChecked"
                  checked
                  onChange={this.handleInputChange}
                />
                Novos
              </label>
              <label htmlFor="used">
                <Checkbox
                  id="used"
                  name="usedCarChecked"
                  checked
                  onChange={this.handleInputChange}
                />
                Usados
              </label>
            </GroupCheckbox>

            <ContainerSelect>
              <div>
                <div>
                  <Select options={null} placeholder="Onde" />
                  <Select options={null} placeholder="Raio" />
                </div>
                <Select
                  options={make}
                  placeholder="Marca"
                  onChange={this.handleSelect}
                />
                <Select
                  options={model}
                  placeholder="Modelo"
                  onChange={this.handleSelect}
                />
              </div>
              <div>
                <Select options={null} placeholder="Ano Desejado" />
                <Select options={null} placeholder="Faixa de Preço" />
                <Select
                  options={version}
                  placeholder="Versão"
                  onChange={this.handleSelect}
                />
              </div>
            </ContainerSelect>

            <AdvancedSearch>
              <div>
                <MdChevronRight size={20} />
                <a href="#!">Busca avançada</a>
              </div>

              <div>
                <FilterClear onClick={this.removeAllFilters}>
                  Limpar filtros
                </FilterClear>
                <SeeOffers>Ver ofertas</SeeOffers>
              </div>
            </AdvancedSearch>
          </Form>
        </Container>
      </>
    );
  }
}
