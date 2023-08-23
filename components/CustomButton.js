import React from "react";
import { Button, Input, VStack, Text, Heading, View } from "native-base";
import { StyleSheet } from "react-native";

const CustomButton = () => {
  return (
    <View style={styles.container}>
      <VStack space={4}>
        <Heading>Login</Heading>
        <Input size="xl" variant="rounded" placeholder="Email ID" />
        <Input size="xl" variant="rounded" placeholder="Password" />
        <Button rounded={20} onPress={() => console.log("hello world")}>Click Me</Button>
      </VStack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomButton;
