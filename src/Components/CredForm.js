import React,{useState} from 'react'
import {db} from '../firebase'
const CredForm = () => {

    const [iden,setIden] = useState('')
    const [pass,setPass] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection('users').add({
            name:iden,
            password:pass
        }).catch((error) => {
            console.error("Error adding document: ", error);
        });
        setIden('')
        setPass('')
      }
    return (
        <div>
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
        </div>
    )
}

export default CredForm
