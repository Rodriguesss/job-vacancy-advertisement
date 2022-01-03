import { LinkStyle } from "./style"

export default function Link({ children, link }) {
  return (
    <LinkStyle><a href={link} target="blank" rel="noopener">&nbsp;{children}</a></LinkStyle>
  )
}