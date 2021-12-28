import JobImage from '../../../../../atomics/JobImage'
import JobDescription from '../JobDescription/Index'
import JobTechnology from '../JobTechnology'

import { Li } from './styled'

export default function JobItem({ data, data: { company }, setFilter }) {
  return (
    <Li>
      <div>
        <JobImage img={company} />
        <JobDescription data={data} />
      </div>
      <JobTechnology data={data} setFilter={setFilter} />
    </Li>
  )
}