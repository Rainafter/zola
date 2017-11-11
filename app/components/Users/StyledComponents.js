import styled from 'styled-components';
import { white, lightGrey2, lightGrey1, orange, green, blue, purple } from '../../components/common/Colors';

const w = 100;
const h = 100;

const priorityMap = { 1: orange, 2: green, 3: blue, 4: purple };
export const Block = styled.div`
  position: relative;
  border: 2px solid ${lightGrey1};
  vertical-align: middle;
  height: 300px;
  background: ${({ priority }) => priorityMap[priority]}
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${w}px;
  height: ${h}px;
  margin-left: -${w / 2}px;
  margin-top: -${h / 2}px;
  text-align: center;
`;

export const TextSpan = styled.span`
  display: block;
  padding: 3px 0;
  color: ${white};
`;

export const Name = styled.h2`
  font-size: 16px;
  padding: 3px 0;
  font-weight: 600;
  color: ${white};
`;

export const Age = styled(TextSpan)`
  font-size: 12px;
  color: ${lightGrey2};
  font-style: italic;
`;

export const Category = styled(TextSpan)`
  font-size: 12px;
  color: ${lightGrey2};
`;
