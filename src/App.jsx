import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import React from 'react'
// class Car extends React.Component{
//  render(){
//   return <h2>asdas</h2>;
  
//  }
// }

function App() {
// const names = ['ali','mmd','reza']
// return <div>{names.map((name , index) =>{
//   return <h2 key={index}>{name}</h2>
// })}</div>

const fun1 = function() {
     console.log('clicked');
    
}
   


return(<button onClick={fun1}>click</button>)



}
export default App 

// export default App
