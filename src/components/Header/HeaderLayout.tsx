import React from 'react';
import styled from 'styled-components';
import { colors } from '../../libs/styles/colors';
import Button from '../Button';

const btnArr = [
  {
    value: '별',
  },
  {
    value: "Clone coding project"
  },
  {
    value: "Team Visible"
  },
  {
    value: 'Invite'
  }
]
const HeaderLayout = () => {
  return (
    <HeaderWrapper>
      <SpanValue>Interview</SpanValue>
      <ButtonArr>
        {btnArr.map(ele => {
          return (
            <Button value={ele.value} />
          )
        })}
      </ButtonArr>
      <RightBtn>
        <Button value="Butler" />
        <Button value="Show Menu" />
      </RightBtn>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  height: 3rem;
  display: flex;
  padding: 0.5rem 1rem;
  position: fixed;
  align-items: center;
  width: 100%;
`;

const SpanValue = styled.span`
  font-weight: bolder;
  color: ${colors.whiteFontColor};
  letter-spacing: 1px;
  height: 100%;

`;

const ButtonArr = styled.div`
  display: flex;
  margin-left: 1rem;
  height: 100%;
`

const RightBtn = styled.div`
  display: flex;
  position: absolute;
  right: 3rem;
  height: calc(100% - 1rem);
`
export default HeaderLayout;
