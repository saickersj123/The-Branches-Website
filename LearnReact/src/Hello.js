import React from 'react';


function Hello(props) {     // 함수형 컴포넌트 Hello 정의
    return (
        <div>
            <h2>Hello, {props.name}!</h2>   
        </div>
    );  // props - 컴포넌트에 전달되는 데이터
}

export default Hello;       // 다른 파일에서도 Hello 컴포넌트 쓸 수 있게 함