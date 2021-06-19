import React from 'react'

const DepartmentNew = (props) => {
    return (
        <div>
            <h1>DepartmentNew component here</h1>
            <form action='/departments' method ='post'>
                <input placeholder = 'name' name="department[name]"/>
                <button type="submit">add</button>
            </form>
            
        </div>
    )
}

export default DepartmentNew