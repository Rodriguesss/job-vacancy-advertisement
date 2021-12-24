import { Img } from './style'

import { Images } from '../../../utils/images/images_import'

export default function JobImage({ img }) {
  function formatedImage(img) {
    return img.replaceAll(' ', '').replace('.', '')
  }

  return (
    <Img>
      <img src={Images[formatedImage(img)]} alt={img} />
    </Img>
  )
}