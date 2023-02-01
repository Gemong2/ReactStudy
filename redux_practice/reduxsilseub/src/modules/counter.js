// 액션 타입 정의 (대문자로)
// 문자열 내용 (모듈 이름 / 액션 이름) 문자열 안에 모듈 이름을 넣어 액션 이름 충돌 방지

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수, 추후 이 함수를 다른 파일에서 불러와 사용 가능
export const increase = () => ({type: INCREASE})
export const decrease = () => ({type: DECREASE})

// 초기 상태 및 리듀서 함수

const initialState = {
    number: 0
};

function counter(state= initialState, action ) {
    switch (action.type) {
        case INCREASE:
            return {
                number: state.number + 1
            };
        case DECREASE:
            return {
                number: state.number - 1
            };
            default:
                return state;
    }
}

// export default 한개만 가능
export default counter;