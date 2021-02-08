import React from 'react'

const CredForm = ({handleSubmit,iden,pass,setIden,setPass}) => {
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
