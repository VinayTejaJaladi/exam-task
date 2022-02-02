import React, { useReducer } from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
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
    case 'answers':
      return { ...state, answers: action.value }
    default:
      return state
  }
}


const App: React.FC = () => {
  const [data, dispatch] = useReducer(reducer, initialState)

  return (
    <UserContext.Provider value={{ state: data, dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='questions' element={<Questions />} />
          <Route path='results' element={<Results />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App