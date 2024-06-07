import React, {useState} from "react";      // react 라이브러리, state 훅 불러오기
import TodoItem from "./TodoItem";  
                                          // useState - 상태 관리
function TodoList() {                       // 함수형 컴포넌트 생성
    const [todos, setTodos] = useState([]); 
    const [input, setInput] = useState('');

    const handleChange = (e) => {           // 입력 필드 값이 변경될 때 마다 호출
        setInput(e.target.value);           // 입력 필드의 현재 값 -> input 상태 업데이트
    };

    const handleAddTodo = () => {           // Todo 추가
        if (input.trim() !== '') {          // 공백 제거 후 공백이 아니면 
            setTodos([...todos, input]);    // Todos 배열에 input 값을 넣음
            setInput('');                   // input 상태를 빈 문자열로 초기화
        }
    };

    const handleRemoveTodo = (index) => {
        const newTodos = todos.filter((todo, i) => i !== index);
        setTodos(newTodos);
    };
    
    return (
        <div>
            <br></br>
            <input type="text" value={input} style={{width: 200, height: 30}} onChange={handleChange} />     
                {/* input값이 바뀌면 handleChange 함수 호출 */}
            
            <p></p>
            <button onClick={handleAddTodo}>추가</button>
            {/* 버튼 클릭 시 todo 추가 */}
            <hr></hr>
            <ul>
                {todos.map((todo, index) => (
                    <TodoItem key={index} index={index} todo={todo} removeTodo={handleRemoveTodo} />
                ))}
                {/* todo와 index를 mapping 해서 리스트 형태로 보여줌 */}
            </ul>
        </div>
    );
}

export default TodoList;    // 컴포넌트 내보내기