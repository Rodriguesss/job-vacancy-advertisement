import { Status } from './style'

export default function StatusCompany({ data }) {
  return (
    <Status>
      {data.new && <li>NEW!</li>}
      {data.featured && <li>FEATURED</li>}
    </Status>
  )
}