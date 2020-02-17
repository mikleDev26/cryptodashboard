import React, { useContext } from 'react';
import { DashBoardContext } from '../Context/DashBoardProvider';

export default function Page(props) {
  const { name, children } = props;

  const { page } = useContext(DashBoardContext);

  if (page !== name) {
    return null;
  }
  return (
    <div>
      {children}
    </div>
  );
}
