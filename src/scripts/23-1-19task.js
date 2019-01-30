import React from 'react';

export class Sayhallorecompose extends React.Component {

    constructor(props) {
        super(props);
        this.state = { formValue: ' ' };
    }

    handleChange(ev) {
        this.setState({ formValue: ev.target.value });
    }

    render() {
        return (
            <React.Fragment>
                <form>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Write your name here</span>
                        </div>
                        <input type="text" onChange={this.handleChange.bind(this)} className="form-control" placeholder="Name" value={this.state.formValue} />
                    </div>
                </form>
                <div className="jumbotron">
                    <Para formValue={this.state.formValue} />
                </div>
            </React.Fragment>
        )
    }
}

class Para extends React.Component {
    render() {
        return (
            <p className="lead">{this.props.formValue.length === 0 ? 'Please put something there!' : `Hello, welcome ${this.props.formValue}`}</p>
        )
    }
}