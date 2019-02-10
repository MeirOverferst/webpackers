import React from 'react';
export class ShowHide extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isParagraphSeen: false };
        // this.state = { counter: 0 }
    }


    handleClick(event) {
        this.setState({ isParagraphSeen: !this.state.isParagraphSeen });
        // this.setState({ counter: this.state.counter + 1 });
        // console.log("you clicked the button !");
        // this.refs.myButton.innerText ="button clicked !";
        // this.refs.miladParagraph.innerText="Milad answered this question!"
    }

    render() {
        return (
            <React.Fragment>
                {/* <button className="btn btn-lg btn-primery" onClick={this.handleClick.bind(this)} ref="myButton">Add a subscriber</button> */}
                <button className="btn btn-lg btn-primary" onClick={this.handleClick.bind(this)}>
                    {this.state.isParagraphSeen ? 'Hide Paragraph' : 'Show Paragraph'}
                </button>
                {this.state.isParagraphSeen && <p className="lead">Now you See Me!</p>}
                {/* {this.state.counter > 0 && <p className="lead" ref="miladParagraph">Officialy we have now {this.state.counter} subscribers</p>} */}
            </React.Fragment>
        )
    }
}