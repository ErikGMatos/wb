import React from 'react';
import Select from 'react-select';

const colourStyles = {
  // estilos do select em si
  control: (styles, state) => ({
    ...styles,
    border: state.isFocused ? '1px solid #666' : '1px solid #b6bac8',
    backgroundColor: 'white',
    boxShadow: 'none',

    '&:hover': {
      border: '1px solid #b6bac8',
    },
  }),

  // Retira o caret do Select
  // dropdownIndicator: styles => ({ ...styles, display: 'none' }),
  // Retira a barra separadora do Select
  indicatorSeparator: styles => ({ ...styles, display: 'none' }),
  valueContainer: styles => ({
    ...styles,
    minHeight: '40px',
  }),

  // estilos das options
  option: styles => ({
    color: '#858585',
    padding: 7,
    textTransform: 'uppercase',
    '&:hover': {
      backgroundColor: '#f3123c',
      color: '#fff',
    },
  }),
};

export default ({ options, placeholder, ...props }) => (
  <Select
    drop
    label="Single select"
    options={options}
    styles={colourStyles}
    placeholder={placeholder || 'Selecione'}
  />
);
