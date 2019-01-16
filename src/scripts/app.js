import '../styles/main.scss';
import '../images/alfaromeogiuliasprint.jpg';
import '../images/night4.jpg';
import '../images/night5.jpg';
import React from 'react';
import ReactDOM from 'react-dom';

class GOGOGO extends React.Component {
    render() {
        const framework = 'React'
        const greet = 'Meir'
        return (
            <div className="center">
                <h1 className="green big" > Welcome To  The {framework} Universe  </h1>
                <img src="./images/night4.jpg" width="200" height="300" />
                <h2 className="big">Hi {greet}</h2>
            </div>



        );
    }
}
class CR7 extends React.Component {

    calculateGoalsRatio(caps, goals) {
        return goals / caps;
    }

    render() {
        const firstName = 'Cristiano';
        const lastName = 'Ronaldo';
        return <h2 className="tahoma" style={{ fontSize: '7.5vw' }}>{firstName} {lastName} scored {this.calculateGoalsRatio(50, 65)} goals this year</h2>;
    }
}

class Conditional extends React.Component {
    render() {
        const isSeen = true;
        return isSeen && <h2>Now you see me</h2>

        // if (isSeen) {
        //     return (<h3 className="big" >Now you see me!</h3>);
        // } else {
        //     return '';
        // }

    }
}

class Menu extends React.Component {
    render() {
        const foodStock = [
            { product: 'Milk', quantity: 5 },
            { product: 'Beer', quantity: 12 },
            { product: 'Bread', quantity: 0 },
            { product: 'Sausage', quantity: 5 }
        ];
        lessThen = [];
        for (let i = 0; i < foodStock.length; i++) {
            if (i.quantity > 0) {
                lessThen.push(i)
            }
            console.log(lessThen);

        }
        return <ul>{lessThen.map(item => <li> {item.quantity} times {item.product} </li>)} </ul>;
    }

}
ReactDOM.render(<GOGOGO />, document.getElementById("app"));
ReactDOM.render(<CR7 />, document.getElementById("ronaldo"));
ReactDOM.render(<Conditional />, document.getElementById("conditional"));
ReactDOM.render(<Menu />, document.getElementById("menu"));
