import React, { useCallback, useEffect, useState } from "react";
import {
  Heading,
  Fab,
  Icon,
  Stack,
  Button,
  Text,
  View,
  Box,
  HStack,
  Pressable,
  Divider,
  ScrollView,
} from "native-base";
import AddTaskModal from "../layouts/AddTaskModal";
import PlusIcon from "../assets/PlusIcon";
import LogoutIcon from "../assets/LogoutIcon";
import TaskCard from "../layouts/TaskCard";
import store from "../store/configStore";
import FilterIcon from "../assets/FilterIcon";
import * as Animatable from "react-native-animatable";
import { useSelector } from "react-redux";
import FilterModal from "../layouts/FilterModal";
import LogoutAlert from "../layouts/LogoutAlert";
import { BackHandler, Dimensions } from "react-native";
import { removeTask, updateTask } from "../actions/storeActions";

const { height } = Dimensions.get("window");

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [taskData, setTaskData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [updateTaskData, setUpdateTaskData] = useState({});
  const [filterModal, setFilterModal] = useState(false);
  const [filterPending, setFilterPending] = useState(false);
  const [filterCompleted, setFilterCompleted] = useState(false);
  const [logout, setLogout] = useState(false);
  const changes = useSelector((state) => state.task);

  const getAllTasksData = () => {
    setTaskData(changes);
    setFilteredData((prev) => changes);
  };

  const handleEditTask = useCallback((taskData) => {
    setUpdateTaskData(taskData);
    setModalVisible(true);
  }, []);

  const handleCompleteTask = useCallback((index, body) => {
    store.dispatch(
      updateTask({
        index: index,
        value: body,
      })
    );
  }, []);

  const handleDeleteTask = useCallback((index) => {
    store.dispatch(removeTask(index));
  });

  const handleFilterChange = () => {
    let filteredTasks = taskData;

    if (filterPending) {
      filteredTasks = filteredTasks.filter((task) => task.status === "pending");
    }

    if (filterCompleted) {
      filteredTasks = filteredTasks.filter(
        (task) => task.status === "completed"
      );
    }
    setFilteredData(filteredTasks);
  };

  useEffect(() => {
    if (taskData.length > 0) handleFilterChange();
  }, [filterCompleted, filterPending]);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        return true;
      }
    );

    return () => {
      backHandler.remove();
    };
  }, []);

  useEffect(() => {
    getAllTasksData();
  }, [changes]);

  return (
    <View style={{ flex: 1 }}>
      <Stack space={3} style={{ padding: 24 }}>
        <HStack justifyContent={"space-between"}>
          <HStack alignItems={"center"} space={2}>
            <Pressable onPress={() => setFilterModal(true)}>
              <FilterIcon />
            </Pressable>
            <Heading>Task</Heading>
          </HStack>
          <Pressable
            bg={"#e3e3e3"}
            onPress={() => {
              setUpdateTaskData({});
              setModalVisible(true);
            }}
            borderRadius={12}
            padding={1}
          >
            <PlusIcon />
          </Pressable>
        </HStack>
        <Divider />
        <ScrollView maxH={height - 100}>
          <Stack space={3}>
            {filteredData.length > 0 ? (
              filteredData?.map((data, index) => (
                <Animatable.View
                  animation="bounceInUp"
                  easing="ease-in-out"
                  duration={1000}
                  style={{ marginBottom: 10 }}
                  key={index}
                >
                  <TaskCard
                    taskId={data.taskId}
                    taskName={data.taskTitle}
                    handleEditTask={handleEditTask}
                    taskDate={data.createdAt}
                    taskDiscription={data.taskDiscription}
                    taskStatus={data.status}
                    index={index}
                    handleCompleteTask={handleCompleteTask}
                    handleDeleteTask={handleDeleteTask}
                  />
                </Animatable.View>
              ))
            ) : (
              <Text>No Tasks</Text>
            )}
          </Stack>
        </ScrollView>

        <Fab
          onPress={() => setLogout(true)}
          placement="bottom-right"
          colorScheme="blue"
          size="lg"
          icon={<LogoutIcon />}
        />
        <AddTaskModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          taskData={updateTaskData}
        />
        <FilterModal
          filterModal={filterModal}
          setFilterModal={setFilterModal}
          filterPending={filterPending}
          setFilterPending={setFilterPending}
          filterCompleted={filterCompleted}
          setFilterCompleted={setFilterCompleted}
        />
        <LogoutAlert isOpen={logout} setIsOpen={setLogout} />
      </Stack>
    </View>
  );
};

export default Home;
