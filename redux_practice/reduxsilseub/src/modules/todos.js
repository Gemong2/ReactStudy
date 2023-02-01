// 액션 타입 정의

import { func } from "prop-types";

const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

// 액션 생성 함수, 파라미터가 필요함.
// 전달받은 파라미터는 액션 객체 안에 추가 필드로 들어감

export const changeInput = input => ({
    type: CHANGE_INPUT,
    input
});

//파라미터 외에 사전 선언 id라는 값에도 의존
// insert가 호출될 때마다 1씩 더해짐
// id 값은 각 todo객체가 들고있게 될 고윳값
// 객체 두개를 사전에 미리 넣어두기 때문에 id = 3

let id = 3; 
export const insert = text => ({
    type: INSERT,
    todo: {
        id: id++,
        text,
        done: false
    }
});

export const toggle = id => ({
    type: TOGGLE,
    id
});

export const remove = id => ({
    type: REMOVE,
    id
});


// 리듀서 함수 작성, 객체에 한 개 이상의 값이 들어가서 불변성 유지해야함
// spread 연산자를 활용함

const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: '리덕스 기초 배우기',
            done: true
        },
        {
            id:2,
            text: '리액트와 리덕스 사용하기',
            done: false
        }
    ]
};

function todos(state = initialState, action) {
    switch (action.type) {
        case CHANGE_INPUT:
            return {
                ...state,
                input: action.input
            };
        case INSERT:
            return {
                ...state,
                todos: state.todos.concat(action.todo)
            };
        case TOGGLE:
            return {
                ...state,
                todos: state.todos.map(todo => 
                    todo.id === action.id ? {...todo, done: !todo.done} : todo
                    )
            };
        case REMOVE:
            return {
                ...state,
                todos:state.todos.filter(todo => todo.id !== action.id)
            };
        default:
            return state;
    }
}

export default todos;