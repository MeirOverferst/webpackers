import '../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { InstaBox } from './instabox';
import { NavBar } from './navbar';

class App extends React.Component {

    render() {
        const data = [
            { title: '', source: './images/finland.jpg', description: 'bla', country: 'Finland' },
            { title: '', source: './images/Japan.jpg', description: 'bla bla', country: 'Japan' },
            { title: '', source: './images/italy.jpg', description: 'bla bla bla', country: 'Italy' },
            { title: '', source: './images/Germany.jpg', description: 'bla bla bla bla', country: 'Germany' }
        ]

        return (
            <React.Fragment>
                <NavBar />
                {data.map((dataPoint, index) => <InstaBox
                    key={index}
                    identifier={dataPoint.country}
                    title={dataPoint.title}
                    imageSource={dataPoint.source}
                    description={dataPoint.description} />

                )}
            </React.Fragment>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('app'));

