import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Label from './Label';
import { darkGrey1 } from './Colors';

export const RadioContainer = styled.div`
  display: inline-block;
  padding: 30px 10px;
  color: ${darkGrey1};
`;
const Radio = (props) => {
  const { name, value, onChange, index, checked } = props;
  return (
    <RadioContainer>
      <Label label={value} padding="0 8px" fontsize="11px" />
      <input key={`${name}-${value}-${index}`} type="radio" name={name} value={value} checked={checked} onChange={onChange} />
    </RadioContainer>
  );
};

Radio.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  index: PropTypes.number,
  checked: PropTypes.bool,
};

export default Radio;
