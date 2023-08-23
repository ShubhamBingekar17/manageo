const initialState = {
  task: [],
};

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_TASK":
      console.log("action.data ",action.data)
      if(initialState.task.length == 0)
      return {
        task: action.data,
      };

    case "ADD_TASK":
      return {
        task: initialState.task.push(action.data),
      };

    case "UPDATE_TASK":
      return {
        task: action.data.payload[action.data.index] = action.data.value,
      };
    case "DELETE_TASK": 
      return {
        task: action.data.payload.splice(action.data.index , 1),
      }
    default:
      return state;
  }
};

export default storeReducer;
