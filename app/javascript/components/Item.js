import React from 'react'

const Item = (props) => {
    const { department, item} = props

    return (
        <div>
            <h1>Item Page</h1>
            <p>Department name: {department.name}</p>
            <p>Department id: {department.id}</p>

            <h1>Item Info</h1>
            <h1>{item.name}</h1>
            <p>Item id: {item.id}</p>
        </div>
    )
}


export default Item