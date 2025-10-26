import React, {useState} from 'react';

const AppXY = () => {
    const [position, setPosition] = useState({x: 0, y: 0, z: 0});
    return (
        <>
            <div className="container" onPointerMove={(e) => {
                console.log(e.clientX, e.clientY)
                // vue와 다른 점 :: 객체를 재할당하는 방식으로 반응형 연결
                // react 의 경우에는 불변성을 기반으로 작동하기 떄문에 객체 재할당시킴 => 새 객체를 만들어야 함 참조를 비교하기 위해서
                // setPosition({x: e.clientX, y: e.clientY});
                // 수평 이동
                setPosition((prev) => ({...prev, x: e.clientX,}
                ))
            }}>
                <div className="pointer" style={{transform: `translate(${position.x}px ,${position.y}px )`}}></div>
            </div>
        </>
    );
};

export default AppXY;