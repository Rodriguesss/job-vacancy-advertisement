import { IconStyle } from "./style"

import IconRemove from '../../../assets/img/icon-remove.svg'

export default function IconClose({ handleSetFilter }) {
  return (
    <IconStyle>
      <img src={IconRemove} alt="Close" onClick={handleSetFilter} />
    </IconStyle>
  )
}