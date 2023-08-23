const initialState = {
  task: [],
};

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_TASK":
      return {
        task: action.data,
      };

    case "ADD_TASK":
        console.log("adding")
      return {
        task: initialState.task.push(action.data),
      };

    case "UPDATE_TASK":
        console.log("reduce ",action.data.index , action.data.value)
        console.log("data ",initialState.task[action.data.index])
      return {
        task: initialState.task[action.data.index] = action.data.value,
      };
    case "DELETE_TASK": 
      console.log("action.data ",action.data)
      return {
        task: initialState.task.splice(action.data , 1),
      }
    default:
      return state;
  }
};

export default storeReducer;
