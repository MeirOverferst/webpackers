import React from 'react';
import { allPhotos } from './photoData';
import { buttonData as allButtons, uniqueClasses } from './buttonData';

export class PhotoGallery extends React.Component {

    constructor(props) {
        super(props);
        this.state = { shownPhotos: allPhotos };
    }

    filterBy(sport) {
        if (sport === 'all') {
            this.setState({ shownPhotos: allPhotos });
        } else {
            this.setState({ shownPhotos: allPhotos.filter(photo => photo.category === sport) });
        }

    }

    filterImages(ev) {
        const targetElementIdentifier = ev.target.getAttribute('identifier');
        this.filterBy(targetElementIdentifier);
    }

    render() {
        return (
            <div className="container text-center" >
                {allButtons.map((button, index) => <button className={['btn', 'btn-lg', uniqueClasses[index]].join(' ')} key={index} identifier={button.identifier} onClick={this.filterImages.bind(this)}>{button.text}</button>)}
                <RenderImages shownPhotos={this.state.shownPhotos} />
            </div>
        )
    }
}

const RenderImages = props => {
    return (
        <div className="container">
            {props.shownPhotos.map((photo, index) => <img style={{ height: '20vw' }} src={photo.source} key={index} className="col-md-3 p-2" />)}
        </div>
    )
}
