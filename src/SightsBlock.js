import { Component } from 'react';
import Sight from './Sight';

class SightsBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sights: []
        }
    }

    getSights = async () => {
        const clientId = 'S1WCGPJVRSDTYYBZNJJZOKHRVFWEEZAII1EO4KGJV0R4MAPA';
        const clientSecret = '4FOMRTOY0FELHPCFBKYCHKU15MI0JIQKUXHQRKTM11MU5O5D';
        const url = 'https://api.foursquare.com/v2/venues/explore?near=';
        const urlToFetch = `${url}${this.props.city}&limit=4&client_id=${clientId}&client_secret=${clientSecret}&v=20190815`;
          try {
            const response = await fetch(urlToFetch);
            if (response.ok) {
              const jsonResponse = await response.json();
              const sights = jsonResponse.response.groups[0].items.map(item => item.venue);
              return sights;
            }
          }
          catch(error) {
            alert('Enter correct destination point!');
            window.location.reload();
          }
        }

        async componentDidMount() {
            const sights = await this.getSights();
            this.setState({sights})
        }

    render () {
        return (
            <div id="venues">
                {this.state.sights && this.state.sights.map((sight, index) => <Sight key={index} sight={sight} />)}
            </div>
        )
    }
}

export default SightsBlock;