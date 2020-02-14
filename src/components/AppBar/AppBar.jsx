import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { DashBoardContext } from '../../Context/DashBoardProvider';



const Logo = styled.div`
  font-size: 1.5rem;
`

const Bar = styled.div`
  display: grid;
  margin-bottom: 40px;
  grid-template-columns: 180px auto 100px 100px;
`

const ControlButtonElem = styled.div`
  cursor: pointer;
  ${props => props.active && css`
    text-shadow: 0px 0px 40px #03ff03;
  `}
`

function toProperCase(lower){
  return lower.charAt(0).toUpperCase() + lower.substr(1);
}

function ControlButton({name, active}){
    const { page, setPage } = useContext(DashBoardContext);
  return (
    <ControlButtonElem onClick={() => setPage(name)} active={name === page}>
      {toProperCase(name)}
    </ControlButtonElem>
  )
}


export default function AppBar() {
  const { page, setPage } = useContext(DashBoardContext);
  console.log('PAGE', page)
  return (
    <Bar>
      <Logo>CryptoDash</Logo>
      <div />
      <ControlButton active name="dashboard" />
      <ControlButton name="settings" />
    </Bar>
  );
}
