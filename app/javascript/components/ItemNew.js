import React from 'react'

const ItemNew = (props) => {
    const { department } = props
    return(
        <div>
            <h1>New item for: {department.name}</h1>
            <form action={`/departments/${department.id}/items`} method='post'>
                <p>name</p>
                <input name='item[name]' />
                <button type='submit'>add</button>
            </form>
        </div>
    )
}

export default ItemNew