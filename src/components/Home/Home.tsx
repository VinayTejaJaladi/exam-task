import React, { useState } from "react";

import './home.css';

interface PropTypes {
    setDetails: React.Dispatch<React.SetStateAction<{
        name: string;
        gender: string;
        language: string;
    } | null>>
}

const Home: React.FC<PropTypes> = ({setDetails}) => {
    const [name, setName] = useState<string>('')
    const [gender, setGender] = useState<string>('')
    const [language, setLanguage] = useState<string>('')

    const onSubmitHandler = () => {
        const formValues = {
            name: name,
            gender: gender,
            language: language,
        } 
        setDetails(formValues)  
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