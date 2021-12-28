import TechnologyTag from "../../../../../atomics/TechnologyTag"

import { MountFilter } from "../../../../../../utils/filters/filter"

import { Technologies } from "./style"

export default function JobTechnology({ data, setFilter }) {
  function handleFilter(technology) {
    setFilter(oldArray => {
      return oldArray.indexOf(technology) === -1 ? [...oldArray, technology] : [...oldArray]
    })
  }

  return (
    <Technologies>
      {MountFilter(data).map((technology, index) => (
        <TechnologyTag key={index} handleFunction={() => handleFilter(technology)} hover={true}>
          {technology}
        </TechnologyTag>
      ))}
    </Technologies>
  )
}