import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { darkGrey1, lightGrey1 } from './Colors';

export const TextContainer = styled.div`
  min-width: 100%;
  display: inline-block;
`;

export const Input = styled.input`
  font-family: Arial;
  border-radius:4px;
  background: white;
  height: 34px;
  vertical-align: middle;
  border: 1px solid ${lightGrey1};
  padding-left: 5px;
  width: 100%;
  color: ${darkGrey1}
`;

const Text = (props) => {
  return (
    <TextContainer onChange={props.onTextChange}>
      <Input
        badInput
        {...props}
      />
    </TextContainer>
  );
};

Text.propTypes = {
  onTextChange: PropTypes.func,
};

export default Text;
