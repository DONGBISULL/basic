import './App.css';

function App() {
    const name = '엘리';
    const list = ['강아지', '고양이', '다람쥐', '돌고래']
    return (
        <>
            <h1 className='orange'>1111</h1>
            <h2>Hello!!</h2>
            <p>{name}</p>
            <ul>
                {
                    list.map((item, index) => (
                        <li key={index}> {item}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default App
