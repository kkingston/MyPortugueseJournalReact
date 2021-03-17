export default (state = null, action) => {
  switch (action.type) {
    case "SET_CURRENT_WORD":
      return action.word
    default:
      return state 
  }
}