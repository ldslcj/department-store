import React from 'react'

const DepartmentEdit = (props) => {
    const {name, id} = props.department
    return (
        <div>
            <h1>Department Edit</h1>
            <from action={`/departments/${id}`} method ='post'>
                <input type = 'hidden' name = '_method' value = 'patch' />
                <input defaultValue = {name} placeholder = 'Department name' name ='department[name]' />
                <button type = 'submit'> Update </button>
            </from>
        </div>
    )
}

export default DepartmentEdit