import React, { useContext, useState } from "react";
import { History } from "history";
import {useNavigate} from 'react-router-dom';
import {UserContext} from "../../userContext";
import Header from "../Header/Header";
import './questions.css';

// interface HistoryProps{
//     id:string;
// }
// interface Props{
//     history:History<HistoryProps>
// }

const Questions:React.FC = () => {
    const navigate = useNavigate();
    const [one, setOne] = useState({ answered: false, answer: '', isCorrect: false });
    const [two, setTwo] = useState({ answered: false, answer: '', isCorrect: false });
    const [three, setThree] = useState({ answered: false, answer: '', isCorrect: false });
    const [four, setFour] = useState({ answered: false, answer: '', isCorrect: false });
    const [five, setFive] = useState({ answered: false, answer: '', isCorrect: false });
    const [question, setQuestion] = useState(1);

    const values = useContext(UserContext);

    const QuestionOne = () => {
        const onChangeHandler = (data: React.KeyboardEvent<HTMLInputElement>) => {
            setOne({ ...one, answer: data.key})
        }

        const submitHandlerOne = () => {
            if (one.answer === "4") {
                setOne({ ...one, answered: true, isCorrect: true })
            } else {
                setOne({ ...one, answered: true, isCorrect: false })
            }
        }
        return (
            <div className="question-container">
                <h1 className="question">What is the result of 1+3 ? Enter in digits(ex. 1,2,3)</h1>
                <input className="answer" type='text' value={one.answer} onKeyPress={(data) => onChangeHandler(data)} />
                <button className="question-submit" type="button" onClick={submitHandlerOne}>Submit</button>
            </div>
        )
    }

    const QuestionTwo = () => {
        const onChangeHandler = (data: React.KeyboardEvent<HTMLInputElement>) => {
            setTwo({ ...two, answer: data.key})
        }

        const submitHandlerTwo = () => {
            if (two.answer === "5") {
                setTwo({ ...two, answered: true, isCorrect: true })
            } else {
                setTwo({ ...two, answered: true, isCorrect: false })
            }
        }
        return (
            <div className="question-container">
                <h1 className="question">What is the result of 2+3 ? Enter in digits(ex. 1,2,3)</h1>
                <input className="answer" type='text' value={two.answer} onKeyPress={(data) => onChangeHandler(data)} />
                <button className="question-submit" type="button" onClick={submitHandlerTwo}>Submit</button>
            </div>
        )
    }

    const QuestionThree = () => {
        const onChangeHandler = (data: React.KeyboardEvent<HTMLInputElement>) => {
            setThree({ ...three, answer: data.key})
        }

        const submitHandlerThree = () => {
            if (three.answer === "6") {
                setThree({ ...three, answered: true, isCorrect: true })
            } else {
                setThree({ ...three, answered: true, isCorrect: false })
            }
        }
        return (
            <div className="question-container">
                <h1 className="question">What is the result of 3+3 ? Enter in digits(ex. 1,2,3)</h1>
                <input className="answer" type='text' value={three.answer} onKeyPress={(data) => onChangeHandler(data)} />
                <button className="question-submit" type="button" onClick={submitHandlerThree}>Submit</button>
            </div>
        )
    }

    const QuestionFour = () => {
        const onChangeHandler = (data: React.KeyboardEvent<HTMLInputElement>) => {
            setFour({ ...four, answer: data.key})
        }

        const submitHandlerFour = () => {
            if (four.answer === "7") {
                setFour({ ...four, answered: true, isCorrect: true })
            } else {
                setFour({ ...four, answered: true, isCorrect: false })
            }
        }
        return (
            <div className="question-container">
                <h1 className="question">What is the result of 4+3 ? Enter in digits(ex. 1,2,3)</h1>
                <input className="answer" type='text' value={four.answer} onKeyPress={(data) => onChangeHandler(data)} />
                <button className="question-submit" type="button" onClick={submitHandlerFour}>Submit</button>
            </div>
        )
    }

    const QuestionFive = () => {
        const onChangeHandler = (data: React.KeyboardEvent<HTMLInputElement>) => {
            setFive({ ...five, answer: data.key})
        }

        const submitHandlerFive = () => {
            if (five.answer === "8") {
                setFive({ ...five, answered: true, isCorrect: true })
            } else {
                setFive({ ...five, answered: true, isCorrect: false })
            }
        }
        return (
            <div className="question-container">
                <h1 className="question">What is the result of 5+3 ? Enter in digits(ex. 1,2,3)</h1>
                <input className="answer" type='text' value={five.answer} onKeyPress={(data) => onChangeHandler(data)} />
                <button className="question-submit" type="button" onClick={submitHandlerFive}>Submit</button>
            </div>
        )
    }

    const renderQuestion = () => {
        switch (question) {
            case 1:
                return QuestionOne()
            case 2:
                return QuestionTwo()
            case 3:
                return QuestionThree()
            case 4:
                return QuestionFour()
            case 5:
                return QuestionFive()
        }
    }

    const onClickSubmit = () => {
        values.dispatch({value:one.isCorrect, type:'one'})
        values.dispatch({value:two.isCorrect, type:'two'})
        values.dispatch({value:three.isCorrect, type:'three'})
        values.dispatch({value:four.isCorrect, type:'four'})
        values.dispatch({value:five.isCorrect, type:'five'})
        // window.history.pushState({},'','/results')
        navigate('/results')
    }

    return (
        <div className="bg-container">
            <Header setResponse={setQuestion} buttonStatus={{one:one.answered, two:two.answered, three:three.answered, four:four.answered, five:five.answered}}/>
            <div className="exam-container">
                {renderQuestion()}
            </div>
            <button className="final-submit" type="button" onClick={() => onClickSubmit()} >Submit Answers</button>
        </div>
    )
}

export default Questions