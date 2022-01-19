import React, {createContext} from "react";

export interface State {
    name: string,
    gender: string,
    language: string,
    answerOne: string | boolean,
    answerTwo: string | boolean,
    answerThree: string | boolean,
    answerFour: string | boolean,
    answerFive: string | boolean,
  }

export const initialState: State = {
    name: '',
    gender: '',
    language: '',
    answerOne: '',
    answerTwo: '',
    answerThree: '',
    answerFour: '',
    answerFive: '',
  }

const UserContext = createContext<{state:State, dispatch:React.Dispatch<any>}>({state:initialState, dispatch: () => null});
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export {UserContext, UserConsumer, UserProvider};