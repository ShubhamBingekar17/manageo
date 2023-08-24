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
      return {
        task: [...state.task, action.data],
      };

    case "UPDATE_TASK":
      return {
        task: state.task.map((item, index) =>
          index === action.data.index ? action.data.value : item
        ),
      };

    case "DELETE_TASK":
      return { task: state.task.filter((item, index) => index !== action.data) };

    default:
      return state;
  }
};

export default storeReducer;
