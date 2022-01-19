import React from "react";

interface PropTypes{
    setAnswers: React.Dispatch<React.SetStateAction<string[] | null>>
}

const Questions: React.FC<PropTypes> = ({setAnswers}) => {
    return (
        <div>
            Questions Page
        </div>
    )
}

export default Questions