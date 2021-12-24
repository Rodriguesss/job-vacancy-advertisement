import styled from "styled-components";

import { Theme } from '../../../../../../utils/style/themes'

export const Li = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0 10px;

  background: ${Theme.color.lightGrayishCyan2};

  border-radius: 5px;

  box-shadow: 5px 3px 10px ${Theme.color.desaturatedDarkCyan};

  border-left: 5px solid ${Theme.color.lightGrayishCyan1};

  width: 100%;

  :hover {
    border-left: 5px solid ${Theme.color.desaturatedDarkCyan};

    cursor: pointer;
  }
`