import { Box, Text, View } from "native-base";
import React from "react";

const ToastMessage = ({ message, type }) => {
  return (
    <View
      bg={type == "error" ? "#B21E42" : "#1C6C40"}
      px="5"
      py="10"
      rounded="3xl"
      mb={5}
    >
      <Text fontWeight={600} color={"#fff"}>
        {message}
      </Text>
    </View>
  );
};

export default ToastMessage;
