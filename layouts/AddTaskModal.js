import React, { useState } from "react";

import {
  Modal,
  ScrollView,
  Button,
  Input,
  Text,
  HStack,
  Stack,
  View,
} from "native-base";

const AddTaskModal = ({ modalVisible, setModalVisible }) => {
  const [taskTitle, setTaskTitle] = useState();

  const handleRestState = () => {
    setTaskTitle("");
    setModalVisible(false);
  };

  return (
    <Modal isOpen={modalVisible} onClose={setModalVisible} size={"md"}>
      <Modal.Content maxH="400">
        <Modal.Body>
          <Stack space={4}>
            <HStack alignItems={"center"}>
              <Text fontSize={18}>Add Task</Text>
              <Modal.CloseButton />
            </HStack>
            <ScrollView>
              <Input
                onChangeText={(value) => setTaskTitle(value)}
                value={taskTitle}
                size="lg"
                variant="rounded"
                placeholder="Title"
              />
            </ScrollView>
            <View flex={1} alignItems={"center"}>
              <Button maxW={"50%"} onPress={handleRestState}>
                Save
              </Button>
            </View>
          </Stack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default AddTaskModal;
