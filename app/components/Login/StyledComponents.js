import styled from 'styled-components';
import { white, mediumBlue1, mediumBlue2, mediumBlue3 } from '../common/Colors';

export const LoginInputWrapper = styled.div`
  position: relative;
  input:focus{
    border-color: ${mediumBlue1};
    box-shadow: 0 3px 10px ${mediumBlue3};
    outline: 0 none;
  }
`;

export const TextInputWrapper = styled.div`
  height: 60px;
  position: relative;
`;

export const LoginButton = styled.button`
  height: 34px;
  width: 200px;
  background-color: ${mediumBlue1};
  font-family: Tahoma;
  border-radius: 4px;
  position: relative;
  font-weight: bold;
  color: ${white};
  text-align: center;
  left: 50%;
  margin-left: -100px;
  cursor:pointer;
  &:hover {
    background-color: ${mediumBlue2};
  }
`;

export const LogoutWrapper = styled.div`
  width: 100px;
  height: 35px;
  display: table;
  text-align: center;
  cursor: pointer;
`;

export const LogoutText = styled.span`
  width: 100%;
  display: table-cell;
  vertical-align: middle;
  color: ${white};
  cursor: pointer;
`;

export const LogoWrapper = styled.div`
  padding: 30px 0;
`;
export const ZolaLogo = styled.img`
  height: 100px;
  width: 100%;
  opacity: .8;
`;

export const LoginStatusWrapper = styled.div`
  background: ${mediumBlue3};
  top: 50%;
  margin: 30px auto 0;
  text-align: center;
  width: 400px;
  padding: 20px 0;

`;
