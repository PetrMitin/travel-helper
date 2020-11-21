import { Component } from 'react';
import SightsBlock from './SightsBlock';
import WeatherBlock from './WeathersBlock';

class Info extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div id="destination"><p>{this.props.city}</p></div>
                </div>
                <div className="sectiontitle">
                    <h2>WEATHER</h2>
                </div>
                <WeatherBlock city={this.props.city} />
                <div className="sectiontitle">
                    <h2>TOP ATTRACTIONS</h2>
                </div>
                <SightsBlock city={this.props.city} />
            </div>
        )
    }
}

export default Info;