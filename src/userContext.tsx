import React, { createContext } from "react";

export interface State {
  name: string,
  gender: string,
  language: string,
  answers: string[]|boolean[]
}

let initialState: State = {
  name: '',
  gender: '',
  language: '',
  answers: []
}

// const storage = localStorage.getItem('state')
// if(storage){
//   initialState = JSON.parse(storage)
// }


const UserContext = createContext<{ state: State, dispatch: React.Dispatch<any> }>({ state: initialState, dispatch: () => null });
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserContext, UserConsumer, UserProvider, initialState };