
import './App.css';
import Cred from './Components/Cred';
import CredForm from './Components/CredForm';
import FilterCred from './Components/FilterCred';

function App() {
  return (
    <div className="App">
      <h2>Search for Words:-</h2>
      <FilterCred/>
     <CredForm/>
     <h1>
       Words List
     </h1>
     <Cred />
    </div>
  );
}


export default App;