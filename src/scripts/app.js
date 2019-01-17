import '../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
// import { InstaBox } from './instabox';
// import { NavBar } from './navbar';
import { BlogPostData, BlogPostContent, BlogPost } from './blogs';

class App extends React.Component {

    render() {

        return (
            <React.Fragment>
                <BlogPost applyClass="display-1">
                    <BlogPostContent country=" Germany" img="./images/Germany.jpg" isSeen={true} />
                    <BlogPostData author="Meir Overferst" />
                </BlogPost>
                <BlogPost applyClass="display-4">
                    <BlogPostContent country="Japan" img="./images/Japan.jpg" isSeen={false} />
                    <BlogPostData author="Kostas " />
                </BlogPost>
            </React.Fragment>
        );
    }



















    // render() {
    //     const data = [
    //         { title: 'Was their but coudnt dee it', source: './images/finland.jpg', description: 'bla', country: 'Finland' },
    //         { title: 'Cheap Sushi and Tamiya stuff', source: './images/Japan.jpg', description: 'bla bla', country: 'Japan' },
    //         { title: 'Long time ago', source: './images/italy.jpg', description: 'bla bla bla', country: 'Italy' },
    //         { title: 'Beers!', source: './images/Germany.jpg', description: 'bla bla bla bla', country: 'Germany' }
    //     ]

    //     return (
    //         <React.Fragment>
    //             <NavBar />
    //             {data.map((dataPoint, index) => <InstaBox
    //                 key={index}
    //                 identifier={dataPoint.country}
    //                 title={dataPoint.title}
    //                 imageSource={dataPoint.source}
    //                 description={dataPoint.description} />

    //             )}
    //         </React.Fragment>
    //     )
    // }
}


ReactDOM.render(<App />, document.getElementById('app'));

