import React, { Component } from 'react'

export default class EmployeeCard extends Component {
    render() {
        return (
            <div>
                <div key={this.props.employee.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.employee.name}</h5>
                        
                    </div>
                    {/* <h6 className="card-subtitle mb-2 text-muted">Caretaker For</h6>
                    <div className="animals--caretaker">
                        {
                            this.props.animals
                                .filter(anml => anml.employeeId === employee.id)
                                .map(anml => <AnimalCard key={anml.id} animal={anml} {...this.props} />)
                        }
                    </div> */}
                </div>
            </div>
        )
    }
}
