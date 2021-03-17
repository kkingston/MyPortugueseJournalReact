export const setCurrentWord = word => {
  return {
    type: "SET_CURRENT_WORD",
    word
  }
}

export const word = () => {
  console.log("the word is")
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/word", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000"
      },
      body: JSON.stringify()
    })
    .then(response => response.json())
    .then(word => {
      console.log("word", word)
    })
    .catch(console.log)
  }
}

