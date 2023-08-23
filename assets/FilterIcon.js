import { useColorMode } from 'native-base';
import React from 'react'
import { Path, Svg } from 'react-native-svg'

const FilterIcon = () => {

  const {colorMode} = useColorMode();


  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <Path fill-rule="evenodd" clip-rule="evenodd" d="M4.00001 3C3.62123 3 3.27497 3.214 3.10558 3.55279C2.93619 3.89157 2.97274 4.29698 3.20001 4.6L8.80001 12.0667C8.92983 12.2398 9.00001 12.4503 9.00001 12.6667V20C9.00001 20.3466 9.17946 20.6684 9.47427 20.8507C9.76909 21.0329 10.1372 21.0494 10.4472 20.8944L14.4472 18.8944C14.786 18.725 15 18.3788 15 18V12.6667C15 12.4503 15.0702 12.2398 15.2 12.0667L20.8 4.6C21.0273 4.29698 21.0638 3.89157 20.8944 3.55279C20.725 3.214 20.3788 3 20 3H4.00001Z" fill={colorMode == "light" ? "#0B0D14" : "#fff"}/>
</Svg>
  )
}

export default FilterIcon