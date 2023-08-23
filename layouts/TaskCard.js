import {
  AspectRatio,
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Image,
  Pressable,
  Stack,
  Text,
  VStack,
} from "native-base";
import React, { memo } from "react";
import EditIcon from "../assets/EditIcon";
import BinIcon from "../assets/BinIcon";
import store from "../store/configStore";
import { removeTask } from "../actions/storeActions";

const TaskCard = ({
  taskName,
  taskDate,
  taskDiscription,
  taskStatus,
  handleEditTask,
  index,
}) => {
  const handleDeleteTask = (index) => {
    store.dispatch(removeTask(index));
  };

  return (
    <Box alignItems="center">
      <Box
        maxW="80"
        minW="80"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700",
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: "gray.50",
        }}
      >
        <Stack p="4" space={3}>
          <HStack justifyContent={"space-between"}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                {taskName}
              </Heading>
              <Text
                fontSize="xs"
                _light={{
                  color: "violet.500",
                }}
                _dark={{
                  color: "violet.400",
                }}
                fontWeight="500"
                ml="-0.5"
                mt="-1"
              >
                {taskStatus}
              </Text>
            </Stack>
            <HStack space={2}>
              <Pressable
                onPress={() =>
                  handleEditTask({
                    taskTitle: taskName,
                    taskDiscription,
                    createdAt: taskDate,
                    status: taskStatus,
                    index: index,
                  })
                }
              >
                <EditIcon />
              </Pressable>
              <Pressable onPress={() => handleDeleteTask(index)}>
                <BinIcon />
              </Pressable>
            </HStack>
          </HStack>
          <Text fontWeight="400">{taskDiscription}</Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack
              alignItems="center"
              width={"100%"}
              justifyContent={"space-between"}
            >
              <Button variant={"ghost"}>Mark Completed</Button>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
};

export default memo(TaskCard);
