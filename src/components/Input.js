import { useState } from "react";

export default function Input(props) {

    const style = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'center',
    }

    const [textAreaValue, setTextAreaValue] = useState("");

    function handleButtonClick(e) {
        if (textAreaValue !== '') {
            setTextAreaValue('');
            props.addItem(textAreaValue);
        }
    }


    function handleTextAreaChange(e) {
        setTextAreaValue(e.target.value);
    }

    return (
        <div style={style} >
            <textarea value={textAreaValue} onChange={handleTextAreaChange}></textarea>
            <button onClick={handleButtonClick}>Add</button>
        </div>
    );
}