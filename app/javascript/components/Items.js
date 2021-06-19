import React from 'react'

const Items = (props) => {
    const {department, items} = props

    const renderItems = () => {
        return items.map(item => {
            return (
                <div>
                    <h1>{item.name}</h1>
                    <a href = {`/departments/${department.id}/items/${item.id}`}>Show</a>
                    <a href = {`/departments/${department.id}/items/${item.id}/edit`}>Edit</a>
                    <a href = {`/departments/${department.id}/items/${item.id}`} data-method = 'delete'>Delete</a>
                </div>
            )
        })
    }
    return (
        <div>
            <h1>Items Page</h1>
            <p>Department name is {department.name}</p>
            <p>Department id is {department.id}</p>
            <h1>Items</h1>
            <a href = {`/departments/${department.id}/items/new`}>New Items</a>
            {renderItems()}
        </div>
    )
}




export default Items