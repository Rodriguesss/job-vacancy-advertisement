import styled from "styled-components";

import { Theme } from '../../../../../../utils/style/themes'

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0 10px;

  flex-wrap: wrap;

  background: ${Theme.color.lightGrayishCyan1};

  border-radius: 5px;

  box-shadow: 5px 3px 10px ${Theme.color.desaturatedDarkCyan};

  border-left: 5px solid ${Theme.color.lightGrayishCyan1};

  width: 100%;

  :hover {
    transition:all 0.5s ease;

    border-left: 5px solid ${Theme.color.desaturatedDarkCyan};]

    cursor: pointer;
  }

  div:first-child {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    flex-wrap: wrap;
  }
`