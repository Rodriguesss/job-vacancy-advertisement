import JobImage from '../../../../../atomics/JobImage'
import JobDescription from '../JobDescription'

import { Li } from './styled'

export default function JobItem({ data }) {
  console.log(data)
  return (
    <Li>
      <JobImage img={data.company} />
      <JobDescription data={data} />
    </Li>
  )
}