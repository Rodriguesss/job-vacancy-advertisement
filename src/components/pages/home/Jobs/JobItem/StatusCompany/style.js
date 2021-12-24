import styled from "styled-components";

import { Theme } from '../../../../../../utils/style/themes'

export const Status = styled.ul`
  display: flex;

  height: 15%;

  gap: 0 10px;
  
  li {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 8px 8px 5px 8px;

    color: #fff;
    font-weight: 700;
    font-size: 12px;

    border-radius: 20px;

    :nth-child(1) {
      background: ${Theme.color.desaturatedDarkCyan};
    }

    :nth-child(2) {
      background: ${Theme.color.veryDarkGrayishCyan};
    }
  }
`