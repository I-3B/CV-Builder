import React from 'react';
import Input from './Input';
class Personal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'first-name-input': '',
            'last-name-input': '',
            'address-input': '',
            'phone-number-input': '',
            'email-input': '',
            'description-input': '',
        };
        if (this.props.value !== undefined) this.state = this.props.value;
        this.getData = this.getData.bind(this);
    }

    getData = async (event) => {
        await this.setState({ [event.target.id]: event.target.value });
        this.props.parentCallback(this.state);
    };
    render() {
        return (
            <section id="personal-information" onChange={this.getData}>
                <h2>Personal Information</h2>
                <Input
                    id="first-name"
                    label="First name:"
                    value={this.state['first-name-input']}
                    placeholder={'Robert'}
                    requiered={'required'}
                />
                <Input
                    id="last-name"
                    label="Last name:"
                    value={this.state['last-name-input']}
                    placeholder={'Speedwagon'}
                    required={'required'}
                />
                <Input
                    id="address"
                    label="Adress:"
                    value={this.state['address-input']}
                    placeholder={'London, England'}
                    required={'required'}
                />
                <Input
                    id="phone-number"
                    label="Phone number:"
                    value={this.state['phone-number-input']}
                    placeholder={'+9639456xx41x0'}
                    required={'required'}
                />
                <Input
                    id="email"
                    label="Email:"
                    value={this.state['email-input']}
                    placeholder={'Speedwagon@gmail.com'}
                    required={'required'}
                />
                <Input
                    id="description"
                    label="Description:"
                    value={this.state['description-input']}
                    placeholder={'Anything about you'}
                />
            </section>
        );
    }
}
export default Personal;
