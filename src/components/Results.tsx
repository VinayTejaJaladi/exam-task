import React from "react";

interface PropTypes{
    details: {
        user: {
            name: string;
            gender: string;
            language: string;
        } | null,
        answers: string[] | null,
    }
}

const Results: React.FC<PropTypes> = ({details}) => {
    return (
        <div>
           <p>{details.user && details.user.name}</p>
        </div>
    )
}

export default Results