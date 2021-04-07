import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.type = 'text';
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        event.preventDefault();
        this.setState({ value: event.target.value.trim() });
    }
    render() {
        if (this.props.type === 'date') this.type = 'date';
        return (
            <div id={this.props.id}>
                <label
                    htmlFor={this.props.id + '-input'}
                    id={this.props.id + '-label'}
                >
                    {this.props.label}
                </label>
                <input
                    id={this.props.id + '-input'}
                    type={this.type}
                    onChange={this.handleChange}
                    value={this.props.value}
                    placeholder={this.props.placeholder}
                    required={this.props.required}
                    maxLength={'50'}
                ></input>
            </div>
        );
    }
}
export default Input;
