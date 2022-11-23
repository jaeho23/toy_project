import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { userRecoilState } from "../recoil/userState";
import "./login.css";
import axios from "axios";

function Login() {
  const [userState, setUserState] = useRecoilState(userRecoilState);
  const [inputs, setInputs] = useState({
    id: "",
    pw: "",
  });
  const [isLogined, setState] = useState(false);
  const loginText = isLogined ? "LOGOUT" : "LOGIN";
  const { id, pw } = inputs;

  function onChangeInputHandler(e) {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }

  axios({
    method: "get",
    url: "localhost:3000"
  })

  function onClickSubmitHandler(e) {
    e.preventDefault();
    setUserState({ userId: inputs.id, userPassword: inputs.pw});
    if (isLogined){
      axios.get('/user');
    return;
    }
  }

  return (
    <>
    <div className="container">
        <img className="logo"></img>
    </div>
    <div className="container">
        <div className="login-box">
          <div className="idpw">
            <p>ID </p>
            <input name='id' onChange={onChangeInputHandler} value={id}/>
            <br />
          </div>
          <div className="idpw">
            <p>PW </p>
            <input name='pw' onChange={onChangeInputHandler} value={pw}/>
            <br />
          </div>
          <button type="button" onClick={onClickSubmitHandler}>
          {loginText}
          </button>
          <br />
          <a href="/signup">회원가입</a>
          <a href="/idpwfind">아이디/비밀번호 찾기</a>
        </div>
      </div>
    </>
  )
}

export default Login;