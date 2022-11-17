import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { userRecoilState } from "../recoil/userState";
import "./login.css";

function Login() {
  const setUserName = useRecoilState(userRecoilState);
  const [input, setInput] = useState("");
  const [state, setState] = useState({
    isLogined: false,
    userName: ""
  });
  const loginText = state.isLogined ? "LOGOUT" : "LOGIN";

  function onChangeInputHandler(e) {
    const text = e.target.value;
    setInput(text);
  }

  function onClickSubmitHandler(e) {
    e.preventDefault();
    if (!state.isLogined){
      setState({
        userName: input,
        isLogined: true,
      });
      setUserName(input);
      return;
    }
    setState({
      isLogined: false,
      userName: ""
    });
  }

  const inputId = <input type="text" onChange={onChangeInputHandler}/>;
  const inputPw = <input type="text" onChange={onChangeInputHandler}/>;

  return (
    <div>
    <div className="container">
        <div className="logo"></div>
    </div>
    <div className="container">
        <div className="login-box">
        
            <div className="idpw">
                <form>
                    <p>ID </p>{inputId}
                    <br />
                </form>
                <form>
                    <p>PW </p>{inputPw}
                </form>
            </div>
        
            <button 
                type="button" 
                onClick={onClickSubmitHandler}>
                {loginText}
            </button>
            <a href="/signUp">회원가입</a>
            <br />
            <a href="/main">아이디/비밀번호 찾기</a>

        {/* <CommentsForm isLogined={state.isLogined} userName={state.userName}/> */}
            </div>
        </div>
    </div>
  )
}

export default Login;