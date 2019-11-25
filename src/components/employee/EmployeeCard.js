import React, { Component } from 'react'

export default class EmployeeCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h5 className="card-title">{this.props.employee.name}</h5>
                    <button type="button"
                        onClick={() => { this.props.history.push(`/employees/${this.props.employee.id}/details`) }}>Details</button>
                </div>
            </div>
        )
    }
}
