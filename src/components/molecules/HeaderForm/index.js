import React, { Component, memo } from 'react';

import { FaCarSide, FaMotorcycle } from 'react-icons/fa';
import { ButtonSellCar } from '../../atoms/Button';
import { ChooseType, ChooseVehicle, Veihcles, TitleVehicles } from './styles';

class FormHeader extends Component {
  state = {
    active: 0,
    carOrMotorcycle: [
      { label: 'carros', active: true },
      { label: 'motos', active: false },
    ],
  };

  handleCarOrMotorcycle = active => {
    this.setState({ active });
  };

  render() {
    const { active, carOrMotorcycle } = this.state;

    return (
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
    );
  }
}
export default memo(FormHeader);
