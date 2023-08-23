import { useColorMode } from 'native-base';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const EyeCloseIcon = () => {

  const {colorMode} = useColorMode();

  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <Path
        id="Vector"
        d="M10.7302 5.07319C11.1448 5.02485 11.5684 5 11.9999 5C16.6639 5 20.3998 7.90264 21.9999 12C21.6053 13.0104 21.0809 13.9482 20.4446 14.7877M6.51956 6.51944C4.47949 7.76406 2.90105 9.69259 1.99994 12C3.60008 16.0974 7.33597 19 11.9999 19C14.0375 19 15.8979 18.446 17.4805 17.4804M9.87871 9.87859C9.33576 10.4215 8.99994 11.1715 8.99994 12C8.99994 13.6569 10.3431 15 11.9999 15C12.8284 15 13.5785 14.6642 14.1214 14.1212"
        stroke={colorMode == "light" ? "#0B0D14" : "#fff"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        id="Vector 134"
        d="M4 4L20 20"
        stroke={colorMode == "light" ? "#0B0D14" : "#fff"}
        stroke-width="2"
        stroke-linecap="round"
      />
    </Svg>
  );
};
