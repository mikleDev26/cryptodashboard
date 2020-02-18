import React, { useContext } from 'react';
import { DashBoardContext } from '../../Context/DashBoardProvider';
import { SelectableTile, DisabledTile, DeletableTile } from '../../Shared/Tile';
import CoinHeaderGrid from './CoinHeaderGrid';
import CoinImage from '../../Shared/CoinImage';


export default function CoinTile(props) {
  const { coinKey, topSection } = props;
  const { coinList } = useContext(DashBoardContext);

  const coin = coinList[coinKey];

  let TileClass = SelectableTile;

  if (topSection) {
    TileClass = DeletableTile;
  }
  console.log('Coin', coin);

  return (
    <TileClass>
      <CoinHeaderGrid topSection name={coin.CoinName} symbol={coin.Symbol} />
      <CoinImage coin={coin} />
    </TileClass>
  );
}
