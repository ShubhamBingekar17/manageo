import { View, Text, Heading, Button, Stack, Center, Image } from "native-base";
import React from "react";
// import error from './a'

const Error = ({ error, resetError }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        
      <Stack space={4}>
        <Heading fontSize={30} textAlign={"center"}>
          Opsss!
        </Heading>
        <Text>Something went wrong</Text>
        <Button onPress={resetError}>Reload</Button>
      </Stack>
      <Image
          source={require("../assets/error.png")}
          alt="Error"
          width={'80%'}
          height={'10%'}
        />
    </View>
  );
};

export default Error;
