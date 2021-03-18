// State object
var state = {
   sorting: false,
   selection: "SELECTIVE",
   numberArray: []
};

// Get state handle
export const getState = () => state;

// Set state handle
export const setState = nextState => {
   
   // Loop through received state and map all keys to existing state
   Object.keys(nextState).forEach((key) => {
      state[key] = nextState[key]
   })
   console.log("STATE: ", state);
}