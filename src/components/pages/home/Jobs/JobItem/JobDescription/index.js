import NameCompany from '../../../../../atomics/NameCompany/'
import StatusCompany from '../StatusCompany'
import PositionCompany from '../../../../../atomics/PositionCompany/'

import { Description } from './style'

export default function JobDescription({ data, data: { company, position } }) {
  return (
    <Description>
      <div>
        <NameCompany name={company} />
        <StatusCompany data={data} />
      </div>

      <PositionCompany position={position} />
    </Description>
  )
}