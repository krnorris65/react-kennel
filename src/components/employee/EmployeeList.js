import React, { Component } from 'react'
import { Link } from "react-router-dom"
import EmployeeCard from "./EmployeeCard"
import EmployeeManager from '../../modules/EmployeeManager'

class EmployeeList extends Component {
    state = {
        employees: []
    }

    componentDidMount() {
        EmployeeManager.getAll()
            .then(employees => {
                this.setState({
                    employees: employees
                })
            })
    }
    render() {
        return (
            <React.Fragment>

                <section className="employees">
                    {
                        this.state.employees.map(employee => <EmployeeCard employee={employee}/>)
                    }
                </section>
            </React.Fragment>
        )
    }
}

export default EmployeeList