import React from 'react';
import Input from './Input';
class Work extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.value;
        this.getData = this.getData.bind(this);
    }
    getData = async (event) => {
        await this.setState({ [event.target.id]: event.target.value });
        this.props.parentCallback(this.state);
    };

    render() {
        return (
            <section
                id={'work-experience-' + this.props.id}
                onChange={this.getData}
            >
                <h2>Work experience</h2>
                <Input
                    id="work-position"
                    label="Position title:"
                    value={this.state['work-position-input']}
                    placeholder={'Front-end developer'}
                />
                <Input
                    id="work-company"
                    label="Company:"
                    value={this.state['work-company-input']}
                    placeholder={'Facebook'}
                />
                <Input
                    id="work-city"
                    label="City:"
                    value={this.state['work-city-input']}
                    placeholder={'New York, US'}
                />
                <Input
                    id="work-from"
                    label="From:"
                    type="date"
                    value={this.state['work-from-input']}
                />
                <Input
                    id="work-to"
                    label="To:"
                    type="date"
                    value={this.state['work-to-input']}
                />
            </section>
        );
    }
}
export default Work;
