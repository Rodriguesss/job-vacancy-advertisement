export function Filter(array, element) {
  return array.filter(e => e !== element)
}

export function FilterJobsWithTags(data, filter) {
  let result = []

  for (let item in data) {
    SearchJobsThroughFilter(filter, data, item, result)
  }

  return result
}

function SearchJobsThroughFilter(filter, data, item, result) {
  let foundFilterArray = []

  let languages = data[item].languages;
  let tools = data[item].tools;
  let level = data[item].level
  let role = data[item].role

  for (let technology in filter) {
    findArrayAccordingFilterItem(foundFilterArray, languages, technology, filter)   
    findArrayAccordingFilterItem(foundFilterArray, tools, technology, filter)    

    filter[technology].includes(level) && foundFilterArray.push(level)
    filter[technology].includes(role) && foundFilterArray.push(role)

    foundFilterArray.length === filter.length && result.push(data[item])
  }

  return result
}

function findArrayAccordingFilterItem(arr, arrayObj, technology, filter) {
  for (let obj in arrayObj) {
    filter[technology].includes(arrayObj[obj]) && arr.push(arrayObj[obj])
  }
}

export function MountFilter({ languages, level, role, tools }) {
  let result = []

  result.push(role, level)
  addItemArrayInFilter(languages, result)
  addItemArrayInFilter(tools, result)

  return result.sort()
}

function addItemArrayInFilter(filter, array) {
  return filter.length !== 0 ? filter.map(item => array.push(item)) : array
}