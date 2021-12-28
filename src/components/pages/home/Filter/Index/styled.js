import styled from "styled-components";

import { Theme } from '../../../../../utils/style/themes'


export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 0 20px;

  opacity: ${({ filter }) => filter.length === 0 ? `0` : `1`};

  transition: all 0.3s ease;

  width: 80%;

  padding: 20px;

  border-radius: 3px;

  background: #FFF;

  box-shadow: 3px 3px 10px ${Theme.color.desaturatedDarkCyan};
`;