import React from 'react';
import './header.css';

interface ButtonsStatus {
    one: boolean;
    two: boolean;
    three: boolean;
    four: boolean;
    five: boolean;
}

const Header: React.FC<{setResponse:React.Dispatch<React.SetStateAction<number>>, buttonStatus:ButtonsStatus}> = ({setResponse, buttonStatus}) => {

    const onClickButton:(num: number) => void = (num) => {
        setResponse(num)
    }
    
    return(
        <div className='buttons-container'>
            <p className={`button ${buttonStatus.one && 'button2'}`} onClick={() => onClickButton(1)}> 1 </p>
            <p className={`button ${buttonStatus.two && 'button2'}`} onClick={() => onClickButton(2)}> 2 </p>
            <p className={`button ${buttonStatus.three && 'button2'}`} onClick={() => onClickButton(3)}> 3 </p>
            <p className={`button ${buttonStatus.four && 'button2'}`} onClick={() => onClickButton(4)}> 4 </p>
            <p className={`button ${buttonStatus.five && 'button2'}`} onClick={() => onClickButton(5)}> 5 </p>
        </div>
    )
}

export default Header