import styled from "styled-components";

import background_image_desktop from '../../../assets/img/bg-header-desktop.svg'

export const Background = styled.body`
  height: 100%;

  background-image: url(${background_image_desktop});
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: hsl(180, 52%, 96%);
`