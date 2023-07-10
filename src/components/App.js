
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../css/App.css';
import Header from './Header';
import Profile from './Profile';
// @ts-ignore
import Registration from './Registration';
import NotFound from './NotFound';
import Home from './Home';

const App = (props) => {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/" element={<Home  gadgetsdetail={props.gadgetsdetail}  />} /> */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
