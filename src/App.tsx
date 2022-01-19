import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import {UserProvider, initialState, State} from './userContext';
import Home from './components/Home/Home';
import Questions from './components/Questions';
import Results from './components/Results';


interface Action {
  type: string,
  value: any
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'form':
      console.log({...state,...action.value})
      return { ...state, ...action.value }
    case 'one':
      return { ...state, answerOne: action.value }
    case 'two':
      return { ...state, answerTwo: action.value }
    case 'three':
      return { ...state, answerThree: action.value }
    case 'four':
      return { ...state, answerFour: action.value }
    case 'five':
      return { ...state, answerFive: action.value }
    default:
      return state
  }
}


const App: React.FC = () => {
  const [data, dispatch] = useReducer(reducer, initialState)
  return (
    <UserProvider value={ {state:data, dispatch} }>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='questions' element={<Questions />} />
        <Route path='results' element={<Results />} />
      </Routes>
    </UserProvider>
  );
}

export default App;