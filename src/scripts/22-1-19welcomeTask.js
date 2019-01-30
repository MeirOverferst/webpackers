import React from 'react'

export class Sayhallo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { formValue: " ", counter: 0 };
    }

    handleChange(ev) {
        this.setState({ formValue: ev.target.value, counter: this.state.counter + 1 });
    }

    render() {
        return (

            <div>
                <form>
                    <input className="form-control" placeholder="Write you name here!" value={this.state.formValue} onChange={this.handleChange.bind(this)} ></input>
                    <p className="jumbotron display-2 text-success">{this.state.counter === 0 ? "Write something " : `Welcome back , ${this.state.formValue}`} </p>
                </form>
            </div>


        )
    }
}