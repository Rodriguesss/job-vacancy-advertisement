import TechnologyTag from '../../../../atomics/TechnologyTag'

import { useCallback } from 'react';

import IconClose from '../../../../atomics/IconClose/index'

import { FilterContainer } from './styled'

export default function Filter({ setFilter, filter }) {
  const handleSetFilter = useCallback(
    (technology) => {
      setFilter(oldArray => oldArray.filter(item => item !== technology))
    },
    [setFilter]
  );

  function handleResetFilter() {
    setFilter([])
  }

  return (
    <FilterContainer filter={filter}>
      {filter.map((technology, index) => (
        <TechnologyTag key={index}>{technology}<IconClose handleSetFilter={() => handleSetFilter(technology)} /></TechnologyTag>
      )
      )}
      <p onClick={handleResetFilter}>Clear</p>
    </FilterContainer>
  )
}