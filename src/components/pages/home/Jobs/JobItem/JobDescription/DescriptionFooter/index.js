import { Description, Space } from "./style"

export default function DescriptionFooter({ postedAt, role, location }) {
  return (
    <Description>{postedAt}<Space>•</Space>{role}<Space>•</Space>{location}</Description>
  )
} 