import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Label from './Label';
export const RadioContainer = styled.div`
  display: inline-block;
  padding: 30px 10px;
`;
const Radio = (props) => {
  const { name, value, onClick, index, checked } = props;
  return (
    <RadioContainer>
      <Label label={value.toUpperCase()} padding="0 8px" />
      <input key={`${name}-${value}-${index}`} label="ss" type="radio" name={name} value={value} onClick={onClick} checked={checked} />
    </RadioContainer>
  );
};

Radio.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
  index: PropTypes.number,
  checked: PropTypes.book,
};

export default Radio;
