import React from 'react'


const Departments = (props) => {
    const { departments } = props
    const renderDepartments = () => {
        return departments.map ( department => {
            return (
                <div>
                    <h1>{department.name}</h1>
                    <a href = {`/departments/${department.id}`}>Show</a>
                    <a href = {`/departments/${department.id}/items`}>Show items</a>
                    <a href = {`/departments/${department.id}/edit`}>Edit</a>
                    <a href = {`/departments/${department.id}`} data-method = 'delete'>Delete</a>

                    

                </div>
            )
        })
    }

    return (
        <div>
            <h1>Departments Here</h1>
            <a href='/departments/new'>New Department</a>
            {renderDepartments()}
        </div>
    )

}



export default Departments