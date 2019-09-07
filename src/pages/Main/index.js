import React, { Component } from 'react';

import { MdChevronRight } from 'react-icons/md';
import { FaCarSide, FaMotorcycle } from 'react-icons/fa';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Checkbox from '../../components/Checkbox';
import { ButtonSellCar, SeeOffers, FilterClear } from '../../components/Button';
import Select from '../../components/Select';
import { where, radius, years, price } from '../../components/Select/data';
import api from '../../services/api';
import {
  Form,
  ContainerSelect,
  GroupSelect,
  IconPlace,
  GroupCheckbox,
  AdvancedSearch,
  ChooseType,
  ChooseVehicle,
  Veihcles,
  TitleVehicles,
} from './styles';

export default class Main extends Component {
  state = {
    clear: false,
    checkedNew: false,
    checkedUsed: false,
    error: false,
    make: [],
    model: [],
    version: [],
    active: 0,
    makeID: { id: 0, label: 'Todas' },
    modelID: { id: 0, label: 'Todos' },
    versionID: { id: 0, label: 'Todas' },
    carOrMotorcycle: [
      { label: 'carros', active: true },
      { label: 'motos', active: false },
    ],
  };

  async componentDidMount() {
    try {
      this.loadMake();
    } catch (err) {
      this.setState({ error: err.message });
    }
  }

  componentDidUpdate(_, prevState) {
    const { makeID, modelID, clear } = this.state;

    if (clear) {
      this.removeOption({ name: 'all' });
    }
    if (prevState.makeID !== makeID) {
      this.removeOption(makeID);
    }

    if (prevState.modelID !== modelID && !!modelID) {
      this.removeOption(modelID);
    }
  }

  removeOption = async obj => {
    if (!obj) return;
    const { name } = obj;
    if (name === 'makeID') {
      await this.setState({
        model: [],
        modelID: null,
        version: [],
        versionID: null,
      });
      this.loadModel();
    } else if (name === 'modelID') {
      await this.setState({
        version: [],
        versionID: null,
      });
      this.loadVersion();
    } else if (name === 'all') {
      await this.setState({
        make: [],
        makeID: null,
        model: [],
        modelID: null,
        version: [],
        versionID: null,
        clear: false,
      });
      this.loadMake();
    }
  };

  removeAllFilters = async () => {
    await this.setState({
      make: [],
      makeID: { id: 0, label: 'Todas' },
      model: [],
      modelID: { id: 0, label: 'Todos' },
      version: [],
      versionID: { id: 0, label: 'Todas' },
      clear: true,
    });
    this.loadMake();
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  handleSelect = e => {
    this.setState({ [e.name]: e });
  };

  handleCarOrMotorcycle = active => {
    this.setState({ active });
  };

  loadMake = async () => {
    const response = await api.get('/Make');
    const { data } = response;
    const all = { id: 0, label: 'Todas', name: 'makeID' };
    const newMake = data.map(m => ({
      id: m.ID,
      value: m.Name,
      label: m.Name,
      name: 'makeID',
    }));

    this.setState({ make: [all, ...newMake] });
  };

  loadModel = async () => {
    const { makeID } = this.state;

    const response = await api.get(`/Model?MakeID=${makeID.id}`);
    const { data } = response;
    const all = { id: 0, label: 'Todos', name: 'modelID' };
    const newModel = data.map(m => ({
      id: m.ID,
      value: m.Name,
      label: m.Name,
      name: 'modelID',
    }));

    this.setState({ model: [all, ...newModel] });
  };

  loadVersion = async () => {
    const { modelID } = this.state;

    const response = await api.get(`/Version?ModelID=${modelID.id}`);
    const { data } = response;
    const all = { id: 0, label: 'Todos', name: 'versionID' };
    const newVersion = data.map(m => ({
      id: m.ID,
      label: m.Name,
      name: 'versionID',
    }));

    this.setState({ version: [all, ...newVersion] });
  };

  render() {
    const {
      error,
      make,
      makeID,
      model,
      modelID,
      version,
      versionID,
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
                  <Select isClearable options={where} label="Onde" />
                  <Select options={radius} label="Raio" />
                  <IconPlace />
                </GroupSelect>
                <GroupSelect>
                  <Select
                    value={makeID}
                    options={make}
                    label="Marca"
                    onChange={this.handleSelect}
                  />
                </GroupSelect>
                <GroupSelect>
                  <Select
                    value={modelID}
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
                  value={versionID}
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
