import React from 'react';
import styled from 'styled-components';
import { colors } from '../libs/styles/colors';

type ButtonProps = {
  value: any;
  onClick?: () => void;
};
const Button = ({ value, onClick }: ButtonProps) => {
  return (
    <BtnWarpper onClick={onClick} type="button">
      {value}
    </BtnWarpper>
  );
};

const BtnWarpper = styled.button`
  padding: 0.5rem 0.8rem;
  border-radius: 0.2rem;
  background-color: ${colors.gray6};
  opacity: 0.5;
  font-size: 1.6rem;
  color: ${colors.whiteFontColor};
  & + button {
    margin-left: 1rem;
  }
`;

export default Button;
