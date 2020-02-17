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

export default Tile;
