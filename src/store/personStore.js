import { create } from 'zustand';

const initialPerson = {
    name: '엘리',
    title: '개발자',
    mentors: [
        {
            name: '밥',
            title: '시니어개발자',
        },
        {
            name: '쭌',
            title: '시니어개발자',
        },
    ],
};

export const usePersonStore = create((set) => ({
    person: initialPerson,

    updateMentorName: (prev, current) =>
        set((state) => ({
            person: {
                ...state.person,
                mentors: state.person.mentors.map((mentor) =>
                    mentor.name === prev
                        ? { ...mentor, name: current }
                        : mentor
                ),
            },
        })),

    addMentor: (name, title) =>
        set((state) => ({
            person: {
                ...state.person,
                mentors: [...state.person.mentors, { name, title }],
            },
        })),

    deleteMentor: (name) =>
        set((state) => ({
            person: {
                ...state.person,
                mentors: state.person.mentors.filter((mentor) => mentor.name !== name),
            },
        })),
}));
