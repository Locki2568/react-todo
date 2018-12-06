import React, { Component } from 'react'

class checkBox extends Component {
    handleInputChange = () => {
        this.props.filterCompleted()
    }
    render () {
        return (
            <div>
                <label>
                Filter completed:
                    <input
                    type="checkbox"
                    checked={this.props.isGoing}
                    onChange={this.handleInputChange} />
                </label>
            </div>
        )
    }
}

export default checkBox