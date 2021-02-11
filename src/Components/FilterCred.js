import React,{useState,useEffect} from 'react'
import {db} from '../firebase'

const FilterCred = () => {
  const [term,setTerm] = useState('')
  const [text,setText] = useState({})
  const PassChanger = (e) => {
    setTerm(e.target.value)
  }
  useEffect(() => {
    db.collection("users").where("name", "==", term)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
           setText(doc.data())
            //console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
  }, [term])
  
    return (
        <div>
          <input value={term} onChange={PassChanger}/>
          { term ? <h4>{text.name}:{text.password}</h4> : "Search for terms/Case Sensitive"}
        </div>
    )
}

export default FilterCred
