import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/main';
import Login from './components/login';
import Message from './components/message';
import NotFound from './components/notfound';
import signUp from './components/signUp';
import idpwFind from './components/idpwFind';
import {useRecoilState} from 'recoil';
import { useState } from 'react';

const App = () => {

  // const id = useRecoilState(userRecoilState);
  // const [input, setInput] = useState("");
  // const [state, setState] = useState({
  //   isLogined: false,
  //   userName: ""
  // });

	return (
		<div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/main' element={<Main />}></Route>
          <Route path='/message' element={<Message />}></Route>
          <Route path='/signup' element={<signUp />}></Route>
          <Route path='/idpwfind' element={<idpwFind />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
		</div>
	);
}

export default App;