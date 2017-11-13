import React, { PropTypes } from 'react';
import { Block, Name, Age, Category, Wrapper } from './StyledComponents';
import { Column } from '../common/Grid';
const User = (props) => {
  const { name, age, category, priority } = props.target;
  return (
    <Column xs="12" sm="4" md="4">
      <Block priority={priority}>
        <Wrapper>
          <Name>{name}</Name>
          <Age>{age} Years old</Age>
          <Category>{category}</Category>
        </Wrapper>
      </Block>
    </Column>
  );
};
User.propTypes = {
  target: PropTypes.object.isRequired,
};
export default User;
