import React, { useContext } from 'react';
import styled from 'styled-components';
import { DashBoardContext } from '../../Context/DashBoardProvider';
import { fontSize1, greenBoxShadow, color3 } from '../../Shared/Styles';

const ConfirmButton = styled.div`
  margin: 20px;
  color: ${color3};
  ${fontSize1}
  padding: 5px;
  cursor: pointer;
  &:hover {
    ${greenBoxShadow}
  }
`;

const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

export default function ConfirnButton() {
  const { confirmFavorites } = useContext(DashBoardContext);
  return (
    <CenterDiv>
      <ConfirmButton onClick={() => confirmFavorites()}>
        Confirm Favorites
      </ConfirmButton>
    </CenterDiv>
  );
}
