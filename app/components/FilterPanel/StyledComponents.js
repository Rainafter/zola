import styled from 'styled-components';
import Select from 'react-select';
// import { white } from '../common/Colors';

export const StyledSelect = styled(Select) `
  width: 100%;
  ${({ direction }) => direction === 'up' ? '.Select-menu-outer { bottom: 36px!important; -webkit-overflow-scrolling: touch; top: auto; }' : ''}
`;

export const Inline = styled.div`
  position: absolute;
  right: 20px;
  top: 30px;
  display: inline-block;
  width: 200px;
`;
