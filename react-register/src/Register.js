import React, { useRef, useState, useEffect } from 'react';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomIcon } from "@fortawesome/react-fontawesome";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
    const useRef = useRef();
    const errRef = useRef();
    
    const [user, setUser ] = useState('');
    const [validName, setValidName ] = useState(false);
    const [userFocus, setUserFocus] = useState(false);
    
    const [pwd, setPwd ] = useState('');
    const [validPwd, setValidPwd ] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [errMsg, setErrMsg ] = useState('');
    const [success, setSuccess ] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])
// 유저 네임이 이름과 유형이 일치하는지
    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    }, [user])

 // 패스워드 유형이 일치하는지, 패스워드와 재입력한 패스워드가 일치하는지 확인
    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [uset, pwd, matchPwd])
    return (
        <section>
            
        </section>
    )
}

export default Register
