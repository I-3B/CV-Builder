import react from 'react';
import '../css/Form.css';
import Education from './Education';
import Work from './Work';
import Personal from './Personal';
class Form extends react.Component {
    constructor(props) {
        super(props);

        if (this.props.value === undefined)
            this.state = {
                personal: {
                    'first-name-input': '',
                    'last-name-input': '',
                    'address-input': '',
                    'phone-number-input': '',
                    'email-input': '',
                    'description-input': '',
                },
                education: {
                    'university-name-input': '',
                    'university-city-input': '',
                    'university-degree-input': '',
                    'university-subject-input': '',
                    'university-from-input': '',
                    'university-to-input': '',
                },
                work: {
                    'work-position-input': '',
                    'work-company-input': '',
                    'work-city-input': '',
                    'work-from-input': '',
                    'work-to-input': '',
                },
            };
        else this.state = this.props.value;

        this.makeHTMLCV = this.getFormData.bind(this);
    }
    handlePersonalCallback = (childData) => {
        this.setState({ personal: childData });
    };

    handleEducationCallback = (childData) => {
        this.setState({ education: childData });
    };

    handleWorkCallback = (childData) => {
        this.setState({ work: childData });
    };
    getFormData = (event) => {
        event.preventDefault();
        this.props.formSubmit(this.state);
    };
    render() {
        return (
            <form onSubmit={this.getFormData}>
                <Personal
                    parentCallback={this.handlePersonalCallback}
                    value={this.state.personal}
                />
                <Education
                    id="1"
                    parentCallback={this.handleEducationCallback}
                    value={this.state.education}
                />
                <Work
                    id="1"
                    parentCallback={this.handleWorkCallback}
                    value={this.state.work}
                />
                <input type="submit"></input>
            </form>
        );
    }
}
export default Form;
