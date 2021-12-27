import NameCompany from '../../../../../../atomics/NameCompany'
import StatusCompany from '../StatusCompany'
import PositionCompany from '../../../../../../atomics/PositionCompany'

import { Description } from './style'
import DescriptionFooter from '../DescriptionFooter'

export default function JobDescription({ data, data: { company, position, postedAt, role, location } }) {
  return (
    <Description>
      <div>
        <NameCompany name={company} />
        <StatusCompany data={data} />
      </div>

      <PositionCompany position={position} />

      <DescriptionFooter postedAt={postedAt} role={role} location={location} />
    </Description>
  )
}