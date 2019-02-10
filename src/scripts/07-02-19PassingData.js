import React from 'react';

export class FormInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { inputVal: '' }
    }
    updateValue(event) {
        this.setState({ inputVal: event.target.value });
    }
    render() {
        return (
            <form>
                <div className="input-group mb-3 input-group-lg">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Your name:</span>
                    </div>
                    <input onChange={this.updateValue.bind(this)} value={this.state.inputVal} type="text" className="form-control" />
                </div>
            </form>
        )
    }
}

export class ShowUserInfo extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <p classname="lead"> hello User</p>
            </div>
        )
    }
}