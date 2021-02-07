import {useState} from 'react';
import './App.css';

function App() {
  const [add,setAdd] = useState([
    {
      name:"Gmail",
      password:"1232"
    },
    {
      name:"Github",
      password:"1232"
    },
    {
      name:"Facebook",
      password:"1232"
    },
    {
      name:"LinkedIn",
      password:"1232"
    },
  ])
  const [iden,setIden] = useState('')
  const [pass,setPass] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    const newCred = {
      name:iden,
      password:pass
    }
    setAdd([...add,newCred])
    setIden('')
    setPass('')
  }
  return (
    <div className="App">
     <h1>
       Password Manager
     </h1>
     <h3>Enter new Credentials:</h3>
     <form onSubmit={handleSubmit}>
     <div>
      Identifier:   
     <input value={iden} type="text" placeholder="enter Identifier" onChange={(e) => setIden(e.target.value)}/>
     </div>
     <div>
       Password:
     <input value={pass} type="password" placeholder="enter Password" onChange={(e) => setPass(e.target.value)} required/>
     </div>
     <button type="submit" >Submit</button>
     </form>
     {add.map((x,idx) => (
       <div key={idx}>
         {x.name}:{x.password}
       </div>
     ))}
     <h3>Enter Credentials to search:</h3>
     <input type="text" />
    </div>
  );
}


export default App;