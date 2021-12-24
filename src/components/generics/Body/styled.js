import styled from "styled-components";

import { Theme } from "../../../utils/style/themes";

export const Background = styled.div`
  position: relative;
`

export const Container = styled.div`
  position: absolute;
  top: 230px;
  left: 0;

  width: 100%;
`

export const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  background-color: ${Theme.color.desaturatedDarkCyan};
`