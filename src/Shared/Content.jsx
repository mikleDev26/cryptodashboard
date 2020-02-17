import React, { useContext } from 'react';
import { DashBoardContext } from '../Context/DashBoardProvider';

export default function Content({ children }) {
  const { coinList } = useContext(DashBoardContext);

  if (!coinList) {
    return <div> Loading Coins </div>;
  }
  return <div>{children}</div>;
}
