import React from 'react';
import Select from 'react-select';

const colourStyles = {
  // estilos do select em si
  control: styles => ({
    ...styles,
    backgroundColor: 'white',
    border: '1px solid #eee',
    '&:hover': {
      border: '1px solid #eee',
    },
  }),

  dropdownIndicator: styles => ({ ...styles, display: 'none' }),
  indicatorSeparator: styles => ({ ...styles, display: 'none' }),

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

export default ({ options, ...props }) => (
  <Select drop label="Single select" options={options} styles={colourStyles} />
);
