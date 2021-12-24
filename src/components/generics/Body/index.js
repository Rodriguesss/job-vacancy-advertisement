import { Image, Background, Container } from "./styled"

import background_image_desktop from '../../../assets/img/bg-header-desktop.svg'

export default function Body({ children }) {
  return (
    <Background>
      <Image>
        <img src={background_image_desktop} alt="imagem fundo" />
      </Image>
      <Container><div>{children}</div></Container>
    </Background>
  )
}