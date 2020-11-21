import { Component } from 'react';

class Sight extends Component {
    render() {
        const sight = this.props.sight;
        const icon = sight.categories[0].icon;
        const imgSrc = `${icon.prefix}bg_64${icon.suffix}`;
        return(
            <div className="sight">
                <h2>{sight.name}</h2>
                <img className="venueimage" src={imgSrc}/>
                <h3>Address:</h3>
                <p>{sight.location.address}</p>
                <p>{sight.location.city}</p>
                <p>{sight.location.country}</p>
            </div>
        )
    }
}

export default Sight;