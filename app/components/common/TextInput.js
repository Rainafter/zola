import React, { PropTypes } from 'react';
import styled from 'styled-components';

import Label from './Label';
import TextSpan from './TextSpan';
import Text from './Text';
import Container from './Container';
import ValidationWarning from './ValidationWarning';

const InlineText = styled(Text)`
  display: inline-block;
`;

const TextInput = (props) => {
  const { name, label, color, onTextChange, placeholder, width, margin, labelWidth, fontsize, className, warningMessage } = props;
  return (
    <Container margin={margin} className={className}>
      {warningMessage && <ValidationWarning>{warningMessage}</ValidationWarning>}
      {label && <Label name={name} label={label} color={color} width={labelWidth} fontsize={fontsize} />}
      <TextSpan className="field" width={width}>
        <InlineText
          type="text"
          name={name}
          placeholder={placeholder}
          onTextChange={onTextChange}
          {...props}
          className=""
        />
      </TextSpan>
    </Container>
  );
};

TextInput.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  color: PropTypes.string,
  placeholder: PropTypes.string,
  onTextChange: PropTypes.func,
  width: PropTypes.string,
  margin: PropTypes.string,
  labelWidth: PropTypes.string,
  fontsize: PropTypes.string,
  warningMessage: PropTypes.string,
};

export default TextInput;
