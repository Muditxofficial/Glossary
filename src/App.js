import {useState} from 'react';
import './App.css';
import Cred from './Components/Cred';
import CredForm from './Components/CredForm';
import FilterCred from './Components/FilterCred';

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
  const [term,setTerm] = useState('')
  const PassChanger = (e) => {
    setTerm(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const sameEntry = add.filter((x) => x.name.toLowerCase() === iden.trim().toLowerCase())
    if (sameEntry.length) {
      alert(`${iden} is already added to list`);
      return;
    }
    const newCred = {
      name:iden,
      password:pass
    }
    setAdd([...add,newCred])
    setIden('')
    setPass('')
  }
  const passToShow = term
  ? add.filter((person) => person.name.toLowerCase().search(term.toLowerCase()) !== -1)
  : add;
  return (
    <div className="App">
      <h2>Search for Password:-</h2>
     <FilterCred term={term} PassChanger={PassChanger}/>
     <CredForm
     handleSubmit={handleSubmit}
     iden={iden}
     pass={pass}
     setIden={setIden}
     setPass={setPass}
     />
     <h1 style={{textAlign:'center'}}>
       Password List
     </h1>
     <Cred className="cred" passToShow={passToShow}/>
     
    </div>
  );
}


export default App;