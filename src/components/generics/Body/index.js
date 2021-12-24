import { Background } from "./styled"

export default function Body({ children }) {
  return (
    <Background>
      { children}
    </Background>
  )
}