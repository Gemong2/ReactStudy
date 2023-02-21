import React from "react";
//리덕스와 연결하기 위한 connect
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import Counter from "../components/Counter";
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({number, increase, decrease}) => {
    return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    );
};

// connect 함수 사용할 때 mapStateToProps, mapDispatchToProps를 미리 선언하고 사용하는 방법
// const mapStateToProps = state => ({
//     number: state.counter.number,
// });

// const mapDispatchToProps = dispatch => ({
//     //임시 함수
//     increase: () => {
//         dispatch(increase())
//     },
//     decrease: () => {
//         dispatch(decrease())
//     },
// });

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
//     )
//     (CounterContainer);

//connect 함수 내부에 익명 함수 형태로 선언하는 방법

export default connect(
    state => ({
        number: state.counter.number,
    }),

    // 두번째 파라미터를 아예 객체 형태로 넣어 주면 connect 함수가 내부적으로 bindActionCreators 작업을 대신 해준다.
    // {
    //     increase,
    //     decrease,
    // },

    // 이거보다 더 편한방법이 있다.
    dispatch =>
        bindActionCreators(
            {
                increase,
                decrease,
            },
            dispatch,
        ),
        // increase: () => { return dispatch(increase()) }, 
        // increase: () => dispatch(increase()), 위와 아래 코드는 작동방식이 동일하다
        // decrease: () => dispatch(decrease()),

        //많은 액션함수를 다룰 때 매번 dispatch로 감싸는게 번거롭다 리덕스에서 제공하는 bindActionCreators 유틸함수를 쓰면 간단히 해
)(CounterContainer);