export const selectUser = (userId) => ({
    type: "SELECT_USER",
    payload: userId,
  });
  
  export const addMessage = (userId, sender, receiver, message) => ({
    type: "ADD_MESSAGE",
    payload: { userId, sender, receiver, message },
  });
  