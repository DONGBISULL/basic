import React from 'react';
import {usePersonStore} from './store/personStore';

export default function AppMentors() {
    //  const [person , setPerson] = useReducer(personReducer)
    const person = usePersonStore((state) => state.person);
    const updateMentorName = usePersonStore((state) => state.updateMentorName);
    const addMentor = usePersonStore((state) => state.addMentor);
    const deleteMentor = usePersonStore((state) => state.deleteMentor);

    const handleUpdate = () => {
        const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
        const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
        // dispatch({type: 'updated', prev, current});
        updateMentorName(prev, current);
    }

    const handleAdd = () => {
        const name = prompt(`추가할 멘토의 이름은?`);
        const title = prompt(`추가할 멘토의 타이틀은?`);
        //  dispatch({type: 'added', name, title});
        addMentor(name, title);
    }

    const handleDelete = () => {
        const name = prompt(`삭제할 멘토의 이름은?`);
        // dispatch({type: 'deleted', name});
        deleteMentor(name);
    }

    return (
        <div>
            <h1>
                {person.name}는 {person.title}
            </h1>
            <ul>
                {person.mentors.map((mentor, index) => (
                    <li key={index}>
                        {mentor.name} ({mentor.title})
                    </li>
                ))}
            </ul>
            <button onClick={handleUpdate}> 멘토 이름 바꾸기</button>
            <button onClick={handleAdd}> 멘토 추가</button>
            <button onClick={handleDelete}> 멘토 삭제</button>
        </div>
    );
}