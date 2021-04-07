import React from 'react';
import '../css/Result.css';
export default class Result extends React.Component {
    constructor(props) {
        super(props);
        this.editForm = this.editForm.bind(this);
    }
    editForm = () => {
        this.props.editClicked();
    };
    render() {
        const { personal, education, work } = this.props.info;
        return (
            <div id="result-container">
                <div id="cv">
                    <h1>
                        {personal['first-name-input']}{' '}
                        {personal['last-name-input']}
                    </h1>
                    <div id="container">
                        <div id="overview">
                            <h3>Description</h3>
                            <hr />
                            <p>{personal['description-input']}</p>
                            <h3>Education</h3>
                            <hr />
                            <p>
                                University: {education['university-name-input']}
                            </p>
                            <p>City: {education['university-city-input']}</p>
                            <p>
                                Degree: {education['university-degree-input']}
                            </p>
                            <p>
                                Subject: {education['university-subject-input']}
                            </p>
                            <p>
                                From: {education['university-from-input']}{' '}
                                &nbsp; to: {education['university-to-input']}
                            </p>
                            <h3>Experience</h3>
                            <hr />
                            <p>Job title: {work['work-position-input']}</p>
                            <p>Company: {work['work-company-input']}</p>
                            <p>City: {work['work-city-input']}</p>
                            <p>
                                From: {work['work-from-input']}&nbsp;to:{' '}
                                {work['work-to-input']}
                            </p>
                        </div>
                        <div id="personal-info">
                            <h4>Address</h4>
                            <p>{personal['address-input']}</p>
                            <h4>Phone Number</h4>
                            <p>{personal['phone-number-input']}</p>
                            <h4>Email</h4>
                            <p>{personal['email-input']}</p>
                        </div>
                    </div>
                </div>
                <div id="edit" onClick={this.editForm}>
                    Edit
                </div>
            </div>
        );
    }
}
