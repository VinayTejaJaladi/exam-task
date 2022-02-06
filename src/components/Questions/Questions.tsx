import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../userContext";
import Header from "../Header/Header";
import './questions.css';


const Questions: React.FC = () => {
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
            setOne({ ...one, answer: data.key })
        }

        const submitHandlerOne = () => {
            if (one.answer === "4") {
                setOne({ ...one, answered: true, isCorrect: true })
            } else {
                setOne({ ...one, answered: true, isCorrect: false })
            }
            setQuestion(question + 1)
        }
        return (
            <div className="question-container">
                <h1 className="question">Q1) What is the result of 1+3 ? Enter in digits(ex. 1,2,3)</h1>
                <input className="answer" type='text' value={one.answer} onKeyPress={(data) => onChangeHandler(data)} />
                <button className="question-submit" type="button" onClick={submitHandlerOne}>Submit</button>
            </div>
        )
    }

    const QuestionTwo = () => {
        const onChangeHandler = (data: React.ChangeEvent<HTMLInputElement>) => {
            console.log(data.target.value)
            setTwo((currentState) => {
                if(currentState.answer.includes(data.target.value)){
                    return {...currentState}
                }return {...currentState, answer:currentState.answer+data.target.value}
            })
        }

        const submitHandlerTwo = () => {
            if (two.answer === "ab" || two.answer==='ba') {
                setTwo({ ...two, answered: true, isCorrect: true })
            } else {
                setTwo({ ...two, answered: true, isCorrect: false })
            }
            setQuestion(question + 1)
        }
        return (
            <div className="question-container">
                <h1 className="question">Q2) How can we achieve the value 5 from below options</h1>
                <div>
                    <div>
                        <input type='checkbox' value='a' id='option-a' onChange={(data) => onChangeHandler(data)} />
                        <label htmlFor="option-a">A) 2+3</label>
                    </div>
                    <div>
                        <input type='checkbox' value='b' id='option-b' onChange={(data) => onChangeHandler(data)} />
                        <label htmlFor="option-b">B) 5+0</label>
                    </div>
                    <div>
                        <input type='checkbox' value='c' id='option-c' onChange={(data) => onChangeHandler(data)} />
                        <label htmlFor="option-c">C) 3+5</label>
                    </div>
                    <div>
                        <input type='checkbox' value='d' id='option-d' onChange={(data) => onChangeHandler(data)} />
                        <label htmlFor="option-d">D) 4+3</label>
                    </div>
                </div>
                <button className="question-submit" type="button" onClick={submitHandlerTwo}>Submit</button>
            </div>
        )
    }

    const QuestionThree = () => {
        const onChangeHandler = (data: React.ChangeEvent<HTMLInputElement>) => {
            setThree({ ...three, answer: data.currentTarget.value})
        }

        const submitHandlerThree = () => {
            if (three.answer === 'c') {
                setThree({ ...three, answered: true, isCorrect: true })
            } else {
                setThree({ ...three, answered: true, isCorrect: false })
            }
            setQuestion(question + 1)
        }
        return (
            <div className="question-container">
                <h1 className="question">Q3) What is the result of 3+3 ? Enter in digits(ex. 1,2,3)</h1>
                <div className="options-container">
                    <div>
                        <input type='radio' id='option-a' value='a' name='multiple' onChange={(data) => onChangeHandler(data)} />
                        <label htmlFor='option-a'>A. 8</label>
                    </div>
                    <div>
                        <input type='radio' id='option-b' value='b' name='multiple' onChange={(data) => onChangeHandler(data)} />
                        <label htmlFor='option-b'>B. 4</label>
                    </div>
                    <div>
                        <input type='radio' id='option-c' value='c' name='multiple' onChange={(data) => onChangeHandler(data)} />
                        <label htmlFor='option-c'>C. 6</label>
                    </div>
                    <div>
                        <input type='radio' id='option-d' value='d' name='multiple' onChange={(data) => onChangeHandler(data)} />
                        <label htmlFor='option-d'>D. 5</label>
                    </div>
                </div>
                <button className="question-submit" type="button" onClick={submitHandlerThree}>Submit</button>
            </div>
        )
    }

    const QuestionFour = () => {
        const onChangeHandler = (data: React.ChangeEvent<HTMLInputElement>) => {
            setFour({ ...four, answer: data.currentTarget.value })
        }

        const submitHandlerFour = () => {
            if (four.answer === "true") {
                setFour({ ...four, answered: true, isCorrect: true })
            } else {
                setFour({ ...four, answered: true, isCorrect: false })
            }
            setQuestion(question + 1)
        }
        return (
            <div className="question-container">
                <h1 className="question">Q4) The value of 4+3 is 7. True or False</h1>
                <div>
                    <input type='radio' id='true' value='true' checked={four.answer==='true'} name='true-false' onChange={(data) => onChangeHandler(data)} />
                    <label htmlFor="true"> True </label>
                </div>
                <div>
                    <input type='radio' id='false' value='false' checked={four.answer==='false'} name='true-false' onChange={(data) => onChangeHandler(data)} />
                    <label htmlFor="true"> False </label>
                </div>
                <button className="question-submit" type="button" onClick={submitHandlerFour}>Submit</button>
            </div>
        )
    }

    const QuestionFive = () => {
        const onClickOption = (data:React.ChangeEvent<HTMLInputElement>) => {
            console.log(data.currentTarget.value)
            setFive({...five,answer:data.currentTarget.value})
        }

        const submitHandlerFive = () => {
            if (five.answer === "d") {
                setFive({ ...five, answered: true, isCorrect: true })
            } else {
                setFive({ ...five, answered: true, isCorrect: false })
            }
            setQuestion(1)
        }
        return (
            <div className="question-container">
                <h1 className="question">Q5) Match the following questions with correct answers.</h1>
                <div className="matching-container">
                    <div>
                        <p>A. Answer of 2+3 is</p>
                        <p>B. Answer of 4+9 is</p>
                        <p>C. Answer of 3+6 is</p>
                        <p>D. Answer of 1+9 is</p>
                    </div>
                    <div>
                        <p>1. 10</p>
                        <p>2. 13</p>
                        <p>3. 9</p>
                        <p>4. 5</p>
                    </div>
                </div>
                <div className="options-container">
                    <div className="option">
                        <input value='a' type='radio' name="matching" id='option-a' checked={five.answer==='a'} onChange={(data) => onClickOption(data)}/>
                        <label htmlFor="option-a">A-2,B-3,C-4,D-1</label>
                    </div>
                    <div className="option">
                        <input value='b' type='radio' name="matching" id='option-b' checked={five.answer==='b'} onChange={(data) => onClickOption(data)}/>
                        <label htmlFor="option-b">A-2,B-3,C-1,D-4</label>
                    </div>
                    <div className="option">
                        <input value='c' type='radio' name="matching" id='option-c' checked={five.answer==='c'} onChange={(data) => onClickOption(data)}/>
                        <label htmlFor="option-c">A-4,B-3,C-2,D-1</label>
                    </div>
                    <div className="option">
                        <input value='d' type='radio' name="matching" id='option-d' checked={five.answer==='d'} onChange={(data) => onClickOption(data)}/>
                        <label htmlFor="option-d">A-4,B-2,C-3,D-1</label>
                    </div>
                </div>
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
        values.dispatch({ value: one.isCorrect, type: 'one' })
        values.dispatch({ value: two.isCorrect, type: 'two' })
        values.dispatch({ value: three.isCorrect, type: 'three' })
        values.dispatch({ value: four.isCorrect, type: 'four' })
        values.dispatch({ value: five.isCorrect, type: 'five' })
        navigate('/results')
    }

    return (
        <div className="bg-container">
            <Header setResponse={setQuestion} buttonStatus={{ one: one.answered, two: two.answered, three: three.answered, four: four.answered, five: five.answered }} />
            <div className="exam-container">
                {renderQuestion()}
            </div>
            <button className="final-submit" type="button" onClick={() => onClickSubmit()} >Submit Answers</button>
        </div>
    )
}

export default Questions