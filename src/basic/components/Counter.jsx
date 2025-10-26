import React, {useState} from 'react';

const Counter = ({total , handleClickBtn}) => {
    const [count, setCount] = useState(0)
    return (
        <>
            <div className="counter">
                <span>Counter</span>
                <span className="number">{count} / {total}</span>
                <button
                    className="counter-button"
                    onClick={() => {
                        setCount(prev => prev + 1);
                        handleClickBtn();
                        // setCount(prev => prev + 1);
                        // setCount(prev => prev + 1);
                        // setCount(prev => prev + 1);
                        console.log(Number(count));
                    }}
                >
                    Counter
                </button>
            </div>
        </>
    );
};

export default Counter;