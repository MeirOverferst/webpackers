import '../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
// import { InstaBox } from './instabox';
// import { NavBar } from './navbar';
// import { BlogPost } from './blogs';
// import { PlayerInfo } from './rider';

class App extends React.Component {

    handleClick(event){
        console.log("you clicked the button !");
        this.refs.myButton.innerText ="button clicked !";
    }
    render(){
        return(
            <button className = "btn btn-lg btn-primery" onClick={this.handleClick.bind(this)} ref="myButton">Click on me </button> 
        )
    }

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

