import React from "react";

function TodoItem({ todo, index, removeTodo }) {
    return (
        <li>
            {todo} <button onClick={() => removeTodo(index)}>삭제</button>
        </li>
    );
}

export default TodoItem;