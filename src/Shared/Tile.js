import styled from 'styled-components';
import {
  subtleBoxShadow, lightBlueBackground, greenBoxShadow, redBoxShadow,
} from './Styles';

const Tile = styled.div`
  ${subtleBoxShadow}
  ${lightBlueBackground}
  padding: 10px;
`;

export const SelectableTile = styled(Tile)`
  &:hover {
    cursor: pointer;
    ${greenBoxShadow}
  }
`;

export const DeletableTile = styled(SelectableTile)`
  &:hover{
    cursor: pointer;
    ${redBoxShadow}
  }
`;

export const DisabledTile = styled(Tile)`
  pointer-events: none;
  opacityL 0.4;
`;

export default Tile;
