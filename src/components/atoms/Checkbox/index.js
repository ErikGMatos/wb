import React, { memo } from 'react';
import PropTypes from 'prop-types';

import {
  CheckboxContainer,
  HiddenCheckbox,
  Icon,
  StyledCheckbox,
} from './styles';

const Checkbox = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);

Checkbox.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool,
};

Checkbox.defaultProps = {
  className: '',
  checked: false,
};

export default memo(Checkbox);
