import React from 'react'

const Cred = ({passToShow}) => {
    return (
        <div>
              {passToShow.map((x,idx) => (
                <div key={idx}>
                    {x.name}:{x.password}
                </div>
                ))}
        </div>
    )
}

export default Cred
