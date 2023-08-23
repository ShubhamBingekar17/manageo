import axios from "axios";
import { api } from "../api/api";
import store from "../store/configStore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const createUser = async (data , navigation) => {
  axios({
    method: "post",
    url: `https://nice-months-throw.loca.lt/firebaseFirestore/addUser`,
    data: data,
  })
    .then((res) => {
      console.log(res.data);
      AsyncStorage.setItem("userId", res.data.userId);
      navigation.navigate("Home");
    })
    .catch((error) => {
      console.log(error);
    });
};

const loginUser = async (data) => {
  axios({
    method: "post",
    url: `https://nice-months-throw.loca.lt/firebaseFirestore/getUserById`,
    data,
  })
    .then((res) => {
      //
      return true;
    })
    .catch((error) => {
      console.log(error);
    });
};

const addNewTask = (data) => {
  store.dispatch({
    type: "ADD_TASK",
    data,
  });
  axios({
    method: "post",
    url: `https://nice-months-throw.loca.lt/firebaseFirestore/addTask`,
    data: data,
  })
    .then((res) => {
      console.log(res.data);
      console.log("added");
    })
    .catch((error) => {
      console.log(error);
    });
};

const updateTask = (data) => {
  store.dispatch({
    type: "UPDATE_TASK",
    data,
  });
};

const getAllTasks = async (data) => {
  axios({
    method: "get",
    url: `https://nice-months-throw.loca.lt/firebaseFirestore/getAllTask`,
  })
    .then((res) => {
      console.log("response ", res.data);
      store.dispatch({ type: "GET_ALL_TASK", data: res.data });
      return res.data;
    })
    .catch((error) => {
      console.log("error: ", error.message);
    });
};

const removeTask = (data) => ({
  type: "DELETE_TASK",
  data,
});

export {
  addNewTask,
  updateTask,
  removeTask,
  getAllTasks,
  createUser,
  loginUser,
};
