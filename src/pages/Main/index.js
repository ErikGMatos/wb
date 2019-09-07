import React, { Component } from 'react';

import { MdChevronRight } from 'react-icons/md';
import { FaCarSide, FaMotorcycle } from 'react-icons/fa';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Checkbox from '../../components/Checkbox';
import { ButtonSellCar, SeeOffers } from '../../components/Button';
import Select from '../../components/Select';
import { where, radius, years, price, all } from '../../components/Select/data';
import api from '../../services/api';
import {
  Form,
  ContainerSelect,
  GroupSelect,
  IconPlace,
  GroupCheckbox,
  AdvancedSearch,
  FilterClear,
  ChooseType,
  ChooseVehicle,
  Veihcles,
  TitleVehicles,
} from './styles';

export default class Main extends Component {
  state = {
    checkedNew: false,
    checkedUsed: false,
    error: false,
    make: [],
    makeID: null,
    model: [],
    modelID: null,
    version: [],
    versionID: null,
    carOrMotorcycle: [
      { label: 'carros', active: true },
      { label: 'motos', active: false },
    ],
    active: 0,
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

  handleCarOrMotorcycle = active => {
    this.setState({ active });
  };

  loadMake = async () => {
    const response = await api.get('/Make');
    const { data } = response;
    const newMake = data.map(m => ({
      id: m.ID,
      label: m.Name,
      name: 'makeID',
    }));

    this.setState({ make: [...all, ...newMake] });
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

    this.setState({ model: [...all, ...newModel] });
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

    this.setState({ version: [...all, ...newVersion] });
  };

  render() {
    const {
      error,
      make,
      model,
      version,
      active,
      carOrMotorcycle,
      checkedNew,
      checkedUsed,
    } = this.state;

    return (
      <>
        <Header />
        <ChooseVehicle>
          <ChooseType active={active}>
            {carOrMotorcycle.map((filter, index) => (
              <Veihcles
                key={String(index)}
                onClick={() => this.handleCarOrMotorcycle(index)}
              >
                {filter.active ? (
                  <FaCarSide size={25} />
                ) : (
                  <FaMotorcycle size={25} />
                )}
                <TitleVehicles>
                  <small>comprar</small>
                  {filter.label}
                </TitleVehicles>
              </Veihcles>
            ))}
          </ChooseType>
          <ButtonSellCar>vender meu carro</ButtonSellCar>
        </ChooseVehicle>
        <Container>
          <Form onSubmit={this.handleSubmit} error={error}>
            <GroupCheckbox>
              <label htmlFor="new">
                <Checkbox
                  id="new"
                  name="checkedNew"
                  checked={checkedNew}
                  onChange={this.handleInputChange}
                />
                Novos
              </label>
              <label htmlFor="used">
                <Checkbox
                  id="used"
                  name="checkedUsed"
                  checked={checkedUsed}
                  onChange={this.handleInputChange}
                />
                Usados
              </label>
            </GroupCheckbox>

            <ContainerSelect>
              <div>
                <GroupSelect>
                  <Select options={where} label="Onde" />
                  <Select options={radius} label="Raio" />
                  <IconPlace />
                </GroupSelect>
                <GroupSelect>
                  <Select
                    options={make}
                    label="Marca"
                    onChange={this.handleSelect}
                  />
                </GroupSelect>
                <GroupSelect>
                  <Select
                    options={model}
                    label="Modelo"
                    onChange={this.handleSelect}
                  />
                </GroupSelect>
              </div>
              <div>
                <Select options={years} placeholder="Ano Desejado" />
                <Select options={price} placeholder="Faixa de Preço" />
                <Select
                  options={version}
                  label="Versão"
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
