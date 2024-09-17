import React, { useState } from "react";
import { Title } from "./Title.jsx";

export function Esignature () {
    const [date, setDate] = useState('DOB');
    const [text, setText] = useState('');

    function handleDateInput (params) {
        setDate(params.target.value);
    };

    function handleTextInput (params) {
        setText(params.target.value);
    };

    return (
        <div>
            <Title text={text}/>
            <Title text={date}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quidem corrupti molestiae maiores eius similique consectetur dolores et sunt eveniet!</p>
            <input type="date" value={date} onChange={handleDateInput}/>
            <input type="text" value={text} onChange={handleTextInput}/>
        </div>
    );
};