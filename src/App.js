import React from 'react';
import './css/App.css';
import Header from './components/Header';
import Form from './components/Form';
import Result from './components/Result';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            main: <Form formSubmit={this.submit} />,
        };
        this.editForm = this.editForm.bind(this);

        //this.main = <Form formSubmit={this.getData} value={this.state.data} />;
    }
    submit = async (formData) => {
        this.setState({
            data: formData,
            main: <Result editClicked={this.editForm} info={formData} />,
        });
    };
    editForm = () => {
        this.setState({
            main: <Form formSubmit={this.submit} value={this.state.data} />,
        });
    };
    render() {
        return (
            <div>
                <Header title="CV Builder" />
                {this.state.main}
            </div>
        );
    }
}

export default App;
