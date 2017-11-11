import React, { PropTypes } from 'react';
import { Block, Name, Age, Category, Wrapper } from './StyledComponents';

const User = (props) => {
  const { name, age, category, priority } = props.target;
  return (
    <div>
      <Block className="desktop" priority={priority}>
        <Wrapper>
          <Name>{name}</Name>
          <Age>{age} Years old</Age>
          <Category>{category}</Category>
        </Wrapper>
      </Block>
    </div>
  );
};
User.propTypes = {
  target: PropTypes.object.isRequired,
};
export default User;
