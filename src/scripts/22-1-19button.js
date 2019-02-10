import React from 'react'

export class ButtonTraining extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isPSeen: false, counter: 0 };
    }
    clickEvent(event) {
        this.setState({ isPSeen: true, counter: this.state.counter + 1 });
        setTimeout(() => {
            this.setState({ isPSeen: false });
        }, 3000)
    }
    render() {
        return (
            <div>
                <button className="btn btn-lg btn-primary" onClick={this.clickEvent.bind(this)}> {this.state.counter === 0 ? "Add the first user" : "add another user"} </button>
                {this.state.isPSeen && <p className={this.state.counter % 10 === 0 ? 'bg-warning' : 'bg-white'}>we have {this.state.counter}users</p>}
            </div>
        )
    }
}