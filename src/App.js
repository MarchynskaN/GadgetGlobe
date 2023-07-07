
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Profile from './Profile';

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
        </Routes>
      </div>
    </Router>
  );
};
// class App extends React.Component{
//   state={
// gadgets:this.props.gadgets
//   };
//   render(){
//     return(  
      
//       <div>
//       <Header1/>


//       {/* {this.state.gadgets.map((gadget)=>(
//        <Body gadgetdetail={gadget}/>
//       ))}
//       */}
//       </div>
     
//     );
//   }
// }









export default App;
