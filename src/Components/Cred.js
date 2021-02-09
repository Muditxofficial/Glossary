import React from 'react'
import useFirestore from '../hooks/useFirestore'
const Cred = () => {
    const {docs} = useFirestore('users')
    console.log(docs)
    return (
        <div>
            {docs && docs.map(doc => (
                <div key={doc.id}>
                    {doc.name}:{doc.password}
                </div>
            ))}
        </div>
    )
}

export default Cred
