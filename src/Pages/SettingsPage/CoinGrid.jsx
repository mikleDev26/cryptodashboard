import React, { useContext } from 'react';
import styled from 'styled-components';
import { DashBoardContext } from '../../Context/DashBoardProvider';
// eslint-disable-next-line import/no-named-as-default
import CoinTile from './CoinTile';

export const CoinGridStyled = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
`;

function getCoinsToDisplay(coinList, topSection) {
  return Object.keys(coinList).slice(0, topSection ? 10 : 100);
}

export default function CoinGrid(props) {
  const { topSection } = props;
  const { coinList } = useContext(DashBoardContext);
  return (
    <CoinGridStyled>
      {getCoinsToDisplay(coinList, topSection).map((coinKey) => (
        <CoinTile topSection={topSection} key={coinKey} coinKey={coinKey} />
      ))}
    </CoinGridStyled>
  );
}
