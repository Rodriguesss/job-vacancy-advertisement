import { Technologies, TechnologyItem } from "./style"

export default function JobTechnology({ languages }) {
  console.log(languages)
  return (
    <Technologies>
      {languages.map(technology => (<TechnologyItem onClick={() => alert('oi')}>{technology}</TechnologyItem>))}
    </Technologies>
  )
}