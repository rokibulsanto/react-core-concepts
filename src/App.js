import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

function App() {
  const candidate =['rokibul','maisha','diya','urbi','annana','oishi','sithi'];
  const job =['web-developer','teacher','banker','house-wife']
  const candidates = candidate.map(X => X);
  

  const productlist = [
    {name:"photoshop",price:"$78.14"},
    {name:"pdf-reader",price:"$25.14"},
    {name:"Illustrator",price:"$58.14"},
    {name:"adobe-reader",price:"$16.14"},
    {name:"sex-toy",price:"$122.14"}

  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <h2>component:Similar in look different in data </h2> 
      <Counter> </Counter>
      <Users> </Users>
      <ul>
          {
            candidate.map(name => <li>{name} </li>)
          }
          
          {
            productlist.map(item => <li>{item.name} </li>)
          }
      </ul>

        
      <Products product ={productlist[0]}> </Products>
      <Products product={productlist[1]}> </Products>
      
      
      <Person name={candidate[0]} job={job[0]}> </Person>
      <Person name={candidate[1]} job={job[1]}> </Person>
      <Person name={candidate[2]} job={job[2]}> </Person>
      <Person name={candidate[3]} job={job[3]}> </Person>
      

      </header>
    </div>
  );
}
function Counter(){
  const [count,setcount] = useState(0)
  const handleClick = () => setcount(count+1);
  
  return (
    <div>
      <h2>count:{count}</h2>
      <button onClick={handleClick}>Increase</button>
      <button onClick={() => setcount(count-1)}>decrease</button>
    </div>
  )
}

function Users(){
  const [users,setusers] = useState([]);
  useEffect(() =>{

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setusers(data));
  })

  return (

    <div>
      <h3>Dynamic users:{users.length}</h3>
      {
        users.map(user => <li>{user.name} </li>)
      }
      
    </div>
  )
}


function Products(props){
const productStyle ={

  border:"1px solid cyan",
  borderRadius:"15px",
  margin:"13px",
  backgroundColor:"gray",
  color:"orange",
  width:"400px",
  height:"400px",
  float:"left"
  
}

  return (
    <div style={productStyle}>
      <h2>name:{props.product.name}</h2>
  <h1>price:{props.product.price}</h1>
      <button >Buy now</button>
      
    </div>
  )
}


function Person(props){

  return (
    <div style={{border:"1px solid gold",margin:"10px",width:"400px"}}>
      <h4>FullName:{props.name}</h4>
      <h5>Profession:{props.job}</h5>
    </div>
  )
}

export default App;
