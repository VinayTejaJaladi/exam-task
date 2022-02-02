import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../userContext";
import { Chart } from "react-google-charts";

const Results: React.FC = () => {
    const values = useContext(UserContext);
    const [noOfCorrect, setNoOfCorrect] = useState(0);
    console.log(values.state)

    useEffect(() => {
        let count = 0
        setNoOfCorrect(count)
    },[values.state])


    const data = [
        ["Answer Type", "Number"],
        ["Correctly Answered", noOfCorrect],
        ["Incorreclty Answered", 5 - noOfCorrect]
    ]

    const options = {
        title: "Exam Result Report",
    }

    return (
        <div>
            <p>{values.state.name}</p>
            <p>{values.state.gender}</p>
            <p>{values.state.language}</p>
            <div>
                <h1>Correct Answers</h1>
                <p>Q1)4, Q2)option-a,option-b, Q3)option-c, Q4)True, Q5)option-d </p>
            </div>
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"400px"}
            />
        </div>
    )
}

export default Results