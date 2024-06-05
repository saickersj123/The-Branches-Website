import React, { useState } from "react";

function Counter() {
    // useState 훅을 사용해 상태 선언
    const [count, setCount] = useState(0);


    return (
        <div>
            <p>Count: {count}</p>
            {/*버튼 클릭 시 상태 변경*/}
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>  
    );
}

export default Counter;