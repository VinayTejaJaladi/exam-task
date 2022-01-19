import React, { useReducer, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Questions from './components/Questions/Questions';
import Results from './components/Results/Results';
import { UserContext, initialState, State } from './userContext';

interface Action {
  type: string,
  value: any
}


const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'form':
      console.log({ ...state, ...action.value })
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

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(data))
  }, [data])


  return (
    <UserContext.Provider value={{ state: data, dispatch }}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='questions' element={<Questions />} />
        <Route path='results' element={<Results />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App