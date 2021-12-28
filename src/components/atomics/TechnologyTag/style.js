import styled from "styled-components";

import { Theme } from "../../../utils/style/themes";

export const Tag = styled.li`
  position: relative;

  display: flex;

  padding: 10px 8px 5px 8px;

  border-radius: 5px;

  background: ${Theme.color.lightGrayishCyan2};

  font-weight: 700;
  color: ${Theme.color.desaturatedDarkCyan};

  ${({hover}) => hover && `
    :hover {
      cursor: pointer;
  
      transition:all 0.3s ease;
  
      background: ${Theme.color.desaturatedDarkCyan};
  
      color: ${Theme.color.lightGrayishCyan1};
    }
  `}

  img {
    color: black;
  }
`