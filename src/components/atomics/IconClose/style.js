import styled from "styled-components";

import { Theme } from '../../../utils/style/themes'

export const IconStyle = styled.div`
  position: absolute;
  right: -28px;
  top: 0;

  cursor: pointer;

  img {
    background: ${Theme.color.desaturatedDarkCyan};

    width: 100%;

    padding: 8px;

    border-radius: 0 5px 5px 0;

    :hover {
      transition: all ease 0.3s;

      background: ${Theme.color.veryDarkGrayishCyan};
    }
  }
`