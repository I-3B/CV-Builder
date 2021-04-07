import React from 'react';
import Input from './Input';
class Education extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.value === undefined)
            this.state = {
                'university-name-input': '',
                'university-city-input': '',
                'university-degree-input': '',
                'university-subject-input': '',
                'university-from-input': '',
                'university-to-input': '',
            };
        else this.state = this.props.value;
        this.getData = this.getData.bind(this);
    }
    getData = async (event) => {
        await this.setState({ [event.target.id]: event.target.value });
        this.props.parentCallback(this.state);
    };
    render() {
        return (
            <section id={'education-' + this.props.id} onChange={this.getData}>
                <h2>Education</h2>
                <Input
                    id="university-name"
                    label="University name:"
                    value={this.state['university-name-input']}
                    placeholder={'Aleppo University'}
                    
                />
                <Input
                    id="university-city"
                    label="City:"
                    value={this.state['university-city-input']}
                    placeholder={'Aleppo, Syria'}
                />
                <Input
                    id="university-degree"
                    label="Degree:"
                    value={this.state['university-degree-input']}
                    placeholder={'Computer science'}
                />
                <Input
                    id="university-subject"
                    label="Subject:"
                    value={this.state['university-subject-input']}
                    placeholder={'Computer Programming'}
                />
                <Input
                    id="university-from"
                    label="From:"
                    type="date"
                    value={this.state['university-from-input']}
                />
                <Input
                    id="university-to"
                    label="To:"
                    type="date"
                    value={this.state['university-to-input']}
                />
            </section>
        );
    }
}
export default Education;
