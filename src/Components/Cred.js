import React from 'react'
import useFirestore from '../hooks/useFirestore'
import {db} from '../firebase'
const Cred = () => {
    const {docs} = useFirestore('users')
    console.log(docs)
    const handleDeletion = (name) => {
        const mine = `${name}`
        db.collection('users').doc(mine).delete().then(() => {
            console.log("document deleted successfully");
        }).catch((err) => {
            console.log("error:",err)
        })
    }
    return (
        <div>
            {docs && docs.map(doc => (
                <div key={doc.id}>
                    <h4>{doc.name}:{doc.password}</h4>
                    <button onClick={() => handleDeletion(doc.id)}>Delete</button>
                </div>
            ))}
            
        </div>
    )
}

export default Cred
