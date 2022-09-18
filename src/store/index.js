import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") return { counter: state.counter + 1 };
  if (action.type === "decrement") return { counter: state.counter - 1 };
  return state;
};

const store = createStore(counterReducer);

const increment = { type: "increment" };
const decrement = { type: "decrement" };

store.dispatch(increment);
store.dispatch(increment);
store.dispatch(increment);
store.dispatch(decrement);

export default store;
