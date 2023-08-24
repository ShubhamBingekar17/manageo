import { useColorMode } from 'native-base';
import React from 'react'
import { Path, Svg } from 'react-native-svg'

const FilterIcon = () => {

  const {colorMode} = useColorMode();


  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<Path d="M20 4H4L9.6 11.4667C9.85964 11.8129 10 12.2339 10 12.6667V20L14 18V12.6667C14 12.2339 14.1404 11.8129 14.4 11.4667L20 4Z" stroke={colorMode == "light" ? "#0B0D14" : "#fff"} stroke-width="2" stroke-linejoin="round"/>
</Svg>
  )
}

export default FilterIcon