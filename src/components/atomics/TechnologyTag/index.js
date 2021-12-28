import { Tag } from "./style"

export default function TechnologyTag({ children, hover, handleFunction }) {
  return (
    <Tag hover={hover} onClick={handleFunction}>
      {children}
    </Tag>
  )
}