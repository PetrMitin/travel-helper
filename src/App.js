import './App.css';
import {Component} from 'react';
import Info from './Info';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        destination: 'London',
        full_destination: '',
        isSubmitted: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
      this.setState({destination: e.target.value});
  }

  handleSubmit(e){
    this.setState({isSubmitted: true, full_destination: this.state.destination})
  }

  render() {
      const info = this.state.isSubmitted ? <Info key={this.state.full_destination} city={this.state.full_destination} /> : null;

      return(
          <div id="form">
            <header>
              <img className="logo" src="https://content.codecademy.com/courses/intermediate-javascript-requests/wanderlust/logo.svg" alt="logo" />
            </header>
            <main>
                <h1>Where do you want to land?</h1>
                <div className="form">
                  <input type="text" id="city" onChange={this.handleChange} autoComplete="off" />
                  <button id="button" onClick={this.handleSubmit}>Submit</button>
                </div>
            </main>
            {info}
          </div>
      )
  }
}

export default App;
