import React,{useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Questions from './components/Questions';
import Results from './components/Results';


const App: React.FC = () => {
  const [userDetails, setUserDetails] = useState<{name:string, gender:string, language:string} | null>(null)
  const [answers, setAnswers] = useState<string[] | null>(null)
  
  return (
      <Routes>
        <Route path='/' element={<Home setDetails={setUserDetails} />}/>
        <Route path='questions' element={<Questions setAnswers={setAnswers} />} />
        <Route path='results' element={<Results details={{user:userDetails, answers:answers}}/>} />
      </Routes>
  );
}

export default App;