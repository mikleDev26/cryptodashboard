import React, { useContext } from 'react';
import { DashBoardContext } from '../../Context/DashBoardProvider';
import { SelectableTile, DisabledTile, DeletableTile } from '../../Shared/Tile';
import CoinHeaderGrid from './CoinHeaderGrid';
import CoinImage from '../../Shared/CoinImage';


function clickCoinHandler(topSection, coinKey, addCoin, removeCoin) {
  return topSection ? () => {
    removeCoin(coinKey);
  } : () => {
    addCoin(coinKey);
  };
}

export default function CoinTile(props) {
  const { coinKey, topSection } = props;
  const { coinList, addCoin, removeCoin } = useContext(DashBoardContext);

  const coin = coinList[coinKey];

  let TileClass = SelectableTile;

  if (topSection) {
    TileClass = DeletableTile;
  }
  console.log('AddCoin', addCoin);

  return (
    <TileClass onClick={clickCoinHandler(topSection, coinKey, addCoin, removeCoin)}>
      <CoinHeaderGrid topSection name={coin.CoinName} symbol={coin.Symbol} />
      <CoinImage coin={coin} />
    </TileClass>
  );
}
