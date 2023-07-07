import React from 'react';
import './index.css';
import gadgetlist from './data/gadgetList';



const Home=()=>{
  let gadgets=gadgetlist.map((gadget)=>{
    return(
    
      <li key={gadget.id}>
        <img src={gadget.url} alt={gadget.name}  />
        <h3>{gadget.desc}</h3>
        <p>{gadget.details}</p>
      </li>
      
    )
  })

  return (
    <div className='homeimage'>
      <ul>
      {gadgets}
      </ul>
    </div>
  )
}
// class Home extends React.Component {
//   state = {
//     gadgets: this.props.gadgetsdetail
//   };

//   render() {
//     return (
//       <div className='homeimage'>
//         {this.state.gadgets.map((gadget) => (
//           <div >
//           <img src={gadget.url} alt={gadget.name}  />
//           <p key={gadget.id}>{gadget.name}</p>
//          <p>{gadget.desc}</p> 
//          <p>{gadget.details}</p>
//          </div>
//         ))}
//       </div>
//     );
//   }
// }


        




export default Home;