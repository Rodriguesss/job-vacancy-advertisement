import Link from '../Link/index'

import { CreditStyle } from './style'

export default function Credit() {
  return (
    <CreditStyle>
      Challenge by
      <Link
        link="https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt"
      >
        Frontend Mentor
      </Link>
      . Coded by
      <Link link="https://github.com/Rodriguesss">
        Vinícius Freitas.
      </Link>
    </CreditStyle>
  )
}