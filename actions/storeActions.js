import axios from "axios";
import { APIURL } from "../api/api";

const createUser = async (data) => {
  try {
    const response = await axios({
      method: "post",
      url: `${APIURL}/firebaseFirestore/addUser`,
      data: data,
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

const loginUser = async (data) => {
  try {
    const response = await axios.post(
      `${APIURL}/firebaseFirestore/getUserById`,
      data
    );
    console.log("success: ", response.data);
    return response.data;
  } catch (error) {
    return error;
  }
};

const addNewTask = (data) => ({
  type: "ADD_TASK",
  data,
});

const updateTask = (data) => ({
  type: "UPDATE_TASK",
  data,
});

const removeTask = (data) => ({
  type: "DELETE_TASK",
  data,
});

export { addNewTask, updateTask, removeTask, createUser, loginUser };
