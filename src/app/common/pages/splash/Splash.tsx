import { useEffect } from 'react'
import Box from '@common/components/Box'
import Img from '@common/components/Img'
import logo from '@asset/img/img_logo.png'

const Splash = () => {
  return (
    <Box>
      <Img src={logo} width={'58px'}></Img>
    </Box>
  )
}

export default Splash
