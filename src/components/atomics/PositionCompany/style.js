import styled from "styled-components";

import { Theme } from '../../../utils/style/themes'

export const Position = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: ${Theme.color.veryDarkGrayishCyan};

  :hover {
    cursor: pointer;
    
    color: ${Theme.color.desaturatedDarkCyan};
  }
`