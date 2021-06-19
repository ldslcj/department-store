import React from 'react'

const Department = (props) => {
    const {id, name} = props.department;
    return(
        <>
            <h1>Departments</h1>
            <h3>{name}</h3>
            <p>
                id: {id}
            </p>
            <a href="/">back</a>
        </>
    )
}

export default Department