import React from 'react';

export default function CoinImage(props) {
  const { coin, style } = props; 
  return (
    <img 
      alt={coin.CoinSymbol}
      style={style || { height: '50px' }}
      src={`http://cryptocompare.com/${coin.ImageUrl}`}
    />
  );
}
