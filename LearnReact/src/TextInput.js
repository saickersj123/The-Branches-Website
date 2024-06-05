import React, {useState} from "react";      // react 라이브러리에서 useState 훅 가져오기

function TextInput() {
    const [text, setText] = useState('');   // 상태 변수 text, 상태 갱신 함수 setText, 초깃값 공백

    const handleChange = (event) => {       // handleChange 함수 선언 
        setText(event.target.value);        // input 요소 값
    };

    return (
        <div>
            <input type="text" value={text} onChange={handleChange}/>
            <p>You typed: {text}</p>
        </div>  
    );      // 버튼 클릭할 때마다 상태 갱신
}

export default TextInput;