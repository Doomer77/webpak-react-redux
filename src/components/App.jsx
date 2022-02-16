import React from 'react';
import './App.less'
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './main/Main';

const App = () => {
  const dispatch = useDispatch()

  return (
    <Router>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Main />} ></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;