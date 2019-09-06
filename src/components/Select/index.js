import React from 'react';
import Select from 'react-select';

const colourStyles = {
  // estilos do select em si
  control: (styles, state) => ({
    ...styles,
    border: state.isFocused ? '2px solid #666' : '2px solid #dfe0e7',
    backgroundColor: 'white',
    boxShadow: 'none',

    '&:hover': {
      border: '2px solid #dfe0e7',
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
