import { Technologies, TechnologyItem } from "./style"

export default function JobTechnology({ languages }) {
  console.log(languages)
  return (
    <Technologies>
      {languages.map(technology => (<TechnologyItem>{technology}</TechnologyItem>))}
    </Technologies>
  )
}