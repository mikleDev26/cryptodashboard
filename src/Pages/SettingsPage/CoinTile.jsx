import React, { useContext } from 'react';
import { DashBoardContext } from '../../Context/DashBoardProvider';
import { SelectableTile } from '../../Shared/Tile';
import CoinHeaderGrid from './CoinHeaderGrid';
import CoinImage from '../../Shared/CoinImage';


export default function CoinTile(props) {
  const { coinKey } = props;
  const { coinList } = useContext(DashBoardContext);

  const coin = coinList[coinKey];
  console.log('Coin', coin);

  return (
    <SelectableTile>
      <CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol} />
      <CoinImage coin={coin} />
    </SelectableTile>
  );
}
