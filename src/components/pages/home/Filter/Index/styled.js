import styled from "styled-components";

import { Theme } from '../../../../../utils/style/themes'

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  opacity: ${({ filter }) => filter.length === 0 ? `0` : `1`};

  width: 80%;

  padding: 20px;

  border-radius: 3px;

  background: #FFF;

  box-shadow: 3px 3px 10px ${Theme.color.desaturatedDarkCyan};

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0 50px;
  }

  p {
    color: ${Theme.color.desaturatedDarkCyan};

    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }
`;