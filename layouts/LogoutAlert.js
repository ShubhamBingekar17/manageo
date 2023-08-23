import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/core";
import { AlertDialog, Button, Text, Stack, HStack } from "native-base";
import React from "react";

const LogoutAlert = ({ isOpen, setIsOpen }) => {
  const onClose = () => setIsOpen(false);

  const cancelRef = React.useRef(null);

  const navigation = useNavigation();

  const handleLogout = () => {
    AsyncStorage.removeItem("userId");
    navigation.navigate("Login");
}

  return (
    <AlertDialog
      leastDestructiveRef={cancelRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <AlertDialog.Content rounded={20}>
        <AlertDialog.CloseButton />
        <AlertDialog.Body>
          <Stack space={5}>
            <Text fontSize={20} bold>
              Logout
            </Text>

            <Text fontSize={16}> Are you sure you want to logout?</Text>

            <HStack space={2} justifyContent={"flex-end"} alignItems={"center"}>
              <Button
                variant="unstyled"
                colorScheme="coolGray"
                onPress={onClose}
                ref={cancelRef}
              >
                Cancel
              </Button>
              <Button colorScheme="danger" onPress={handleLogout}>
                Logout
              </Button>
            </HStack>
          </Stack>
        </AlertDialog.Body>
      </AlertDialog.Content>
    </AlertDialog>
  );
};

export default LogoutAlert;
