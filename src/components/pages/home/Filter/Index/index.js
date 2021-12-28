import TechnologyTag from '../../../../atomics/TechnologyTag'
import { FilterContainer } from './styled'

export default function Filter({ filter }) {
  return (
    <FilterContainer filter={filter}>
      {filter.map((technology, index) => (
        <TechnologyTag key={index}>{technology}</TechnologyTag>)
      )}
    </FilterContainer>
  )
}