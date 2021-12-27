import JobImage from '../../../../../atomics/JobImage'
import JobDescription from '../JobDescription/Index'
import JobTechnology from '../JobTechnology'

import { Li } from './styled'

export default function JobItem({ data, data: { company, languages } }) {
  console.log(data)
  return (
    <Li>
      <div>
        <JobImage img={company} />
        <JobDescription data={data} />
      </div>
      <JobTechnology languages={languages} />
    </Li>
  )
}