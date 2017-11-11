import React, { PropTypes } from 'react';
import styled from 'styled-components';

export const Label = styled.label`
  font-family: Arial;
  display: block;
  padding: 5px 0px;
  margin: 0;
  font-weight: 600;
  font-size: 14px;
  color: ${({ color }) => color};
  width: ${({ width }) => width};
  font-size: ${({ fontsize }) => fontsize};
`;

const StyledLabel = ({ label, color, width, fontsize, className }) => {
  return (
    <Label color={color} width={width} fontsize={fontsize} className={className}>{label}</Label>
  );
};

StyledLabel.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  width: PropTypes.string,
  fontsize: PropTypes.string,
  className: PropTypes.string,
};

export default StyledLabel;
