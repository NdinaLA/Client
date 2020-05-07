const Counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state++;
    case 'DECREMENT':
      return state--;
    default:
      return null;
  }
};

export default Counter;
