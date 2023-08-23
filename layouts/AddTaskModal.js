import React, { useEffect, useState } from "react";

import {
  Modal,
  ScrollView,
  Button,
  Input,
  Text,
  HStack,
  Stack,
  View,
  TextArea,
  VStack,
} from "native-base";
import CloseIcon from "../assets/CloseIcon";
import { addNewTask, updateTask } from "../actions/storeActions";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AddTaskModal = ({ modalVisible, setModalVisible, taskData }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [status, setStatus] = useState("pending");
  const [taskDiscription, setTaskDiscription] = useState("");
  const [createdAt, setCreatedAt] = useState(String(new Date()));
  const [editType, setEditType] = useState(false);

  const handleRestState = () => {
    setTaskTitle("");
    setStatus("pending");
    setTaskDiscription("");
    setCreatedAt(String(new Date()));
    setEditType(false);
    setModalVisible(false);
  };

  const handleAddTask = async () => {
    const userId = await AsyncStorage.getItem("userId");

    addNewTask({
      userId,
      taskTitle,
      taskDiscription,
      createdAt,
      status,
    });
    handleRestState();
  };

  const handleUpdateTask = () => {
    updateTask({
      index: taskData.index,
      value: {
        taskTitle,
        taskDiscription,
        createdAt,
        status,
      },
    });
    handleRestState();
  };

  useEffect(() => {
    if (Object.keys(taskData).length > 0) {
      console.log("taskData ", taskData);
      setTaskTitle(taskData.taskTitle);
      setTaskDiscription(taskData.taskDiscription);
      setStatus(taskData.status);
      setCreatedAt(taskData.createdAt);
      setEditType(true);
    }
  }, [taskData]);

  return (
    <Modal
      isOpen={modalVisible}
      onClose={() => setModalVisible(false)}
      size={"md"}
    >
      <Modal.Content maxH="400" rounded={20}>
        <Modal.Body>
          <Stack space={4}>
            <HStack alignItems={"center"} justifyContent={"space-between"}>
              <Text fontSize={18}>Add Task</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <CloseIcon />
              </TouchableOpacity>
            </HStack>
            <VStack space={4}>
              <Input
                onChangeText={(value) => setTaskTitle(value)}
                value={taskTitle}
                size="lg"
                variant="rounded"
                placeholder="Title"
              />
              <TextArea
                onChangeText={(value) => setTaskDiscription(value)}
                value={taskDiscription}
                h={40}
                placeholder="Enter the task discription"
                rounded={15}
              />
            </VStack>
            <HStack
              justifyContent={"center"}
              space={2}
              flex={1}
              alignItems={"center"}
            >
              <Button
                isDisabled={taskDiscription.length < 5 || taskTitle.length < 3}
                maxW={"50%"}
                onPress={editType ? handleUpdateTask : handleAddTask}
              >
                {editType ? "Update" : "Add"}
              </Button>
            </HStack>
          </Stack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default AddTaskModal;
