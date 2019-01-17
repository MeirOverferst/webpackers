import React from 'react'


export class NavBar extends React.Component {

    render() {
        const places = ["Finland", "Japan", "Italy", "Germany"]

        return (
            <nav className="navi" >
                {places.map((place, position, ) => <li key={position}>< a href="#"> {place} </a> </li>)}
            </nav>
        );
    }
}