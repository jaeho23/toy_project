import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/main';
import Login from './components/login';
import Message from './components/message';
import NotFound from './components/notfound'

const App = () => {
	return (
		<div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/main' element={<Main />}></Route>
          <Route path='/message' element={<Message />}></Route>
          <Route path='/signUp' element={<Message />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
		</div>
	);
}

export default App;