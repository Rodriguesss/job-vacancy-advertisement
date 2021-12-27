import styled from "styled-components";

import { Theme } from "../../../../../../utils/style/themes";

export const Technologies = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0 10px;

  width: 50%;

  margin-right: 40px;
`;

export const TechnologyItem = styled.li`
  display: flex;

  padding: 10px 8px 5px 8px;

  border-radius: 5px;

  background: ${Theme.color.lightGrayishCyan2};

  font-weight: 700;
  color: ${Theme.color.desaturatedDarkCyan};

  :hover {
    background: ${Theme.color.desaturatedDarkCyan};

    color: ${Theme.color.lightGrayishCyan1};
  }
`;