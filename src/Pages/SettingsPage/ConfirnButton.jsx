import React, { useContext } from "react";
import styled from "styled-components";
import { DashBoardContext } from "../../Context/DashBoardProvider";

const ConfirmButton = styled.div`
  margin: 20px;
  color: green;
  cursor: pointer;
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
