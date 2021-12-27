import JobItem from '../JobItem/Index'
import { JobList } from './styled'

import data from '../../../../../data/data.json'

export default function Jobs() {

  return (
    <JobList>
      {data.map(job => (
        <JobItem data={job} />
      ))}
    </JobList>
  )
}