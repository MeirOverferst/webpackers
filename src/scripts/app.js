import '../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
// import { InstaBox } from './instabox';
// import { NavBar } from './navbar';
// import { BlogPost } from './blogs';
// import { PlayerInfo } from './rider';
// import { ButtonTraining } from './22-1-19button';
// import { Sayhallo } from './22-1-19welcomeTask';
// import { Warmup } from './23-1-19theory';
// import { Sayhallorecompose} from './23-1-19task';
import { PhotoGallery } from './23-1-19photoGallery';
// import { ToDoList } from './28-1-19toDoList';

class App extends React.Component {

    render() {
        return (
            <PhotoGallery />
        )
    }
    // constructor(props) {
    //     super(props);
    //     this.state = { isParagraphSeen: false };
    //     // this.state = { counter: 0 }
    // }


    // handleClick(event) {
    //     this.setState({ isParagraphSeen: !this.state.isParagraphSeen });
    //     // this.setState({ counter: this.state.counter + 1 });
    //     // console.log("you clicked the button !");
    //     // this.refs.myButton.innerText ="button clicked !";
    //     // this.refs.miladParagraph.innerText="Milad answered this question!"
    // }

    // render() {
    //     return (
    //         <React.Fragment>
    //             {/* <button className="btn btn-lg btn-primery" onClick={this.handleClick.bind(this)} ref="myButton">Add a subscriber</button> */}
    //             <button className="btn btn-lg btn-primary" onClick={this.handleClick.bind(this)}>
    //                 {this.state.isParagraphSeen ? 'Hide Paragraph' : 'Show Paragraph'}
    //             </button>
    //             {this.state.isParagraphSeen && <p className="lead">Now you See Me!</p>}
    //             {/* {this.state.counter > 0 && <p className="lead" ref="miladParagraph">Officialy we have now {this.state.counter} subscribers</p>} */}
    //         </React.Fragment>
    //     )
    // }

    // render() {

    //     return (
    //         <div className="container d-flex p-3">
    //             <PlayerInfo playerName="Sam Hill" playerDescription="Fastest Rider Ever!" source="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Sam-Hill.jpg/1200px-Sam-Hill.jpg" />
    //             <PlayerInfo playerName="Steve Peat" playerDescription="GB on the map" source="https://www.nottinghamplayhouse.co.uk/files/images/applicationfiles/1261.1051.StevePeat1000px.jpg.cropped/320x320.fitandcrop.jpg" />
    //             <PlayerInfo playerName="Brendan Fairclough" playerDescription="Whip it !" source="https://ep1.pinkbike.org/p4pb11191915/p4pb11191915.jpg" />
    //         </div>
    //     );
    // }


    // render() {
    //     return (
    //         <React.Fragment>
    //             <BlogPost makeBig={true} country="Germany" parentAuthor="Kostas Diakogiannis" parentImage="./images/Germany.jpg" parentShowImage={true} />
    //             <BlogPost makeBig={true} country="Japan" parentAuthor="Ali Pudina" parentImage="./images/Japan.jpg" parentShowImage={true} />
    //             <BlogPost makeBig={true} country="Italy" parentAuthor="Mohamad Lahham" parentImage="./images/italy.jpg" parentShowImage={true} />
    //         </React.Fragment>
    //     );
    // }
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
// ReactDOM.render(<App />, document.getElementById('InstaBox'));
// ReactDOM.render(<App />, document.getElementById('NavBar'));

