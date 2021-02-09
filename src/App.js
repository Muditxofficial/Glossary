
import './App.css';
import Cred from './Components/Cred';
import CredForm from './Components/CredForm';
import FilterCred from './Components/FilterCred';

function App() {
  /* const passToShow = term
  ? add.filter((person) => person.name.toLowerCase().search(term.toLowerCase()) !== -1)
  : add; */
  return (
    <div className="App">
      <h2>Search for Password:-</h2>
     {/* <FilterCred term={term} PassChanger={PassChanger}/> */}
     <CredForm/>
     <h1 style={{textAlign:'center'}}>
       Password List
     </h1>
     <Cred />
    </div>
  );
}


export default App;