import React, {useState} from 'react';
import Counter from "./components/Counter.jsx";

const AppCounter = () => {
    const [count, setCount] = useState(0)
    const handleChangeCount = () => {
        setCount(prevCount => prevCount + 1)
    }
    return (
        <div>
            <div className="banner">
                Total Count : {count} {count > 10 ? '🔥' : '❄️'}
            </div>
            <Counter total={count} handleClickBtn={handleChangeCount}/>
            <Counter total={count} handleClickBtn={handleChangeCount}/>
        </div>
    );
};

export default AppCounter;