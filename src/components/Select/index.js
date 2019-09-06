import React from 'react';
import Select from 'react-select';

// const colourStyles = {
//   // estilos do select em si
//   control: styles => ({ ...styles, backgroundColor: 'white', border: 'none' }),
//   dropdownIndicator: styles => ({ ...styles, display: 'none' }),
//   indicatorSeparator: styles => ({ ...styles, display: 'none' }),
//   // estilos das options
//   option: styles => ({
//     color: '#000',
//     padding: 30,
//     '&:hover': {
//       backgroundColor: '#f3123c',
//       color: '#fff',
//     },
//   }),
// };

export default ({ options, ...props }) => (
  <Select
    drop
    label="Single select"
    options={options}
    // styles={colourStyles}
  />
);
