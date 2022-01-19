import React, { useContext } from "react";
import {UserContext} from "../../userContext";

const Results: React.FC = () => {
    const values = useContext(UserContext);
    console.log(values.state)
    console.log("Results Page")
    return (
        <div>
            <p>{values.state.name}</p>
            <p>{values.state.gender}</p>
            <p>{values.state.language}</p>
            <p>{values.state.answerOne ? 'True' : 'False'}</p>
            <p>{values.state.answerTwo ? 'True' : 'False'}</p>
            <p>{values.state.answerThree ? 'True' : 'False'}</p>
            <p>{values.state.answerFour ? 'True' : 'False'}</p>
            <p>{values.state.answerFive ? 'True' : 'False'}</p>
        </div>
    )
}

export default Results