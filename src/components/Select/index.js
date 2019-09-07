import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import { Container, Label } from './styles';

const colourStyles = {
  // estilos do select em si
  control: (styles, state) => ({
    ...styles,
    border: state.isFocused ? '1px solid #666' : '1px solid #b6bac8',
    backgroundColor: '#fff',
    fontSize: '1.3rem',
    boxShadow: 'none',
    fontWeight: 'bold',
    color: '#333!important',

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
    ...styles,
    backgroundColor: '#fff',
    color: '#858585',
    padding: 7,
    textTransform: 'uppercase',
    '&:hover': {
      backgroundColor: '#f3123c',
      color: '#fff',
    },
  }),
};

const ComponentSelect = ({
  options,
  placeholder,
  onChange,
  label,
  ...props
}) => (
  <>
    <Container>
      <Select
        {...props}
        drop
        options={options}
        styles={colourStyles}
        placeholder={placeholder || 'Selecione'}
        onChange={onChange}
      />
      {label && <Label>{label}</Label>}
    </Container>
  </>
);

ComponentSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
  placeholder: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

ComponentSelect.defaultProps = {
  options: [],
  placeholder: '',
  label: '',
  onChange: () => {},
};

export default ComponentSelect;
