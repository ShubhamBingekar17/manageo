import { useColorMode } from 'native-base'
import React from 'react'
import { Path, Svg } from 'react-native-svg'

const CloseIcon = () => {

  const {colorMode} = useColorMode();

  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <Path d="M17 7L6.99997 17" stroke={colorMode == "light" ? "#0B0D14" : "#fff"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <Path d="M7.00003 7L17 17" stroke={colorMode == "light" ? "#0B0D14" : "#fff"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>
  )
}

export default CloseIcon