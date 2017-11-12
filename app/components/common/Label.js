import React, { PropTypes } from 'react';
import styled from 'styled-components';

export const Label = styled.label`
  font-family: Arial;
  display: inline-block;
  padding: ${({ padding }) => padding};
  margin: 0;
  font-weight: 600;
  font-size: 14px;
  color: ${({ color }) => color};
  width: ${({ width }) => width};
  font-size: ${({ fontsize }) => fontsize};
`;

const StyledLabel = ({ label, color, width, fontsize, className, padding }) => {
  return (
    <Label color={color} width={width} padding={padding} fontsize={fontsize} className={className}>{label}</Label>
  );
};

StyledLabel.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  width: PropTypes.string,
  fontsize: PropTypes.string,
  padding: PropTypes.string,
  className: PropTypes.string,
};

export default StyledLabel;
