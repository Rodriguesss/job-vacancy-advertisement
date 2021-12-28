export function Filter(array, element) {
  return array.filter(e => e !== element)
}

export function FilterJobsWithTags(data, filter) {
  if(filter.length === 0) return data

  let result = []

  for (let item in data) {
    SearchJobsThroughFilter(filter, data, item, result)
  }

  return result
}

function SearchJobsThroughFilter(filter, data, item, result) {
  let foundFilterArray = []

  const { languages, tools, level, role } = data[item]
  const params = [languages, tools, level, role]

  for (let technology in filter) {
    params.forEach(parameter => findArrayAccordingFilterItem(foundFilterArray, parameter, technology, filter))
    foundFilterArray.length === filter.length && result.push(data[item])
  }

  return result
}

function findArrayAccordingFilterItem(arr, filterParams, technology, filter) {
  if (Array.isArray(filterParams)) {
    for (let obj in filterParams) {
      filter[technology].includes(filterParams[obj]) && arr.push(filterParams[obj])
    }
  } else {
    filter[technology].includes(filterParams) && arr.push(filterParams)
  }
}

export function MountFilter({ languages, level, role, tools }) {
  let result = []
  const params = [languages, level, role, tools]

  params.forEach(parameter => {
    addItemArrayInFilter(parameter, result)
  })

  return result.sort()
}

function addItemArrayInFilter(filter, array) {
  if (Array.isArray(filter)) {
    return filter.length !== 0 ? filter.map(item => array.push(item)) : array
  } else {
    return array.push(filter)
  }
}