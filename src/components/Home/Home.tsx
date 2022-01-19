import React, { useState, useContext } from "react";
import { UserContext } from "../../userContext";
import './home.css';

const Home: React.FC = (props) => {
    const [name, setName] = useState<string | undefined>('')
    const [gender, setGender] = useState<string | undefined>('')
    const [language, setLanguage] = useState<string | undefined>('')
    const context = useContext(UserContext)

    const onSubmitHandler = () => {
        const formValues = {
            name: name,
            gender: gender,
            language: language,
        }
        context.dispatch({value:formValues, type: 'form'})
        
    }

    return (
        <div className="bg-container">
            <div className="form-container">
                <div className="input-container">
                    <label htmlFor="name">Name of the user</label>
                    <input className="input-field" type='text' placeholder="Enter Name" value={name} onChange={(data) => setName(data.target.value)} />
                </div>
                <div className="input-container">
                    <label htmlFor='gender'>Gender</label>
                    <input className="input-field" type='text' placeholder="Enter Gender" value={gender} onChange={(data) => setGender(data.target.value)} />
                </div>
                <div className="input-container">
                    <label htmlFor='language'>Language</label>
                    <input className="input-field" type='text' placeholder="Enter Language" value={language} onChange={(data) => setLanguage(data.target.value)} />
                </div>
                <button type="button" onClick={onSubmitHandler}>Submit</button>
            </div>
        </div>
    )
}

export default Home