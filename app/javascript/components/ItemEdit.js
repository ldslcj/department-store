import React from 'react'

const ItemEdit = (props) => {
    const { department, item } = props
    return(
        <div>
            <h1>itemEdit Page</h1>
            <form action={`/departments/${department.id}/items/${item.id}`} method='post'>
                <input type='hidden' name='_method' value='patch'/>
                <p>name</p>
                <input defaultValue={item.name} name='item[name]' />
                <button type='submit'>add</button>
            </form>
        </div>
    )
}

export default ItemEdit