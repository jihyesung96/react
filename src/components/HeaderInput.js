import React from 'react';

const HeaderInput = ({inputText, onChange, onAddTodo}) => {
    //const{inputText, onChange, onAddTodo} = props;
    return (
        <div className="header">
            <h2>To do List</h2>
            <div>
                <input value={inputText} onChange={onChange}/>
                <button onClick={onAddTodo}>+</button>
            </div>
        </div>
    );
};

export default HeaderInput;