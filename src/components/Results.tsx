import React, { useContext } from "react";
import { UserContext } from "../userContext";

const Results: React.FC = () => {
    const values = useContext(UserContext);
    console.log(values.state)
    console.log("Results Page")
    return (
        <div>
            <p>{values.state.name}</p>
            <p>{values.state.gender}</p>
            <p>{values.state.language}</p>
        </div>
    )
}

export default Results