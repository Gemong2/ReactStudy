// 액션 타입 정의 (대문자로)
// 문자열 내용 (모듈 이름 / 액션 이름) 문자열 안에 모듈 이름을 넣어 액션 이름 충돌 방지

import { createAction, handleActions } from "redux-actions";

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';


// 모듈에 작성된 액션 생성 함수를 이용해 createAction 함수 사용하여 만들기
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 액션 생성 함수, 추후 이 함수를 다른 파일에서 불러와 사용 가능
// export const increase = () => ({type: INCREASE})
// export const decrease = () => ({type: DECREASE})

// 초기 상태 및 리듀서 함수

const initialState = {
    number: 0
};

// 리듀서 함수 더 간단하게

const counter = handleActions(
    {
        [INCREASE]: (state, action) => ({ number: state.number + 1 }),
        [DECREASE]: (state, action) => ({ number: state.number - 1 })
    },
    initialState,
);



// function counter(state= initialState, action ) {
//     switch (action.type) {
//         case INCREASE:
//             return {
//                 number: state.number + 1
//             };
//         case DECREASE:
//             return {
//                 number: state.number - 1
//             };
//             default:
//                 return state;
//     }
// }

// export default 한개만 가능
export default counter;