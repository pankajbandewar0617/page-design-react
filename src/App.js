import React from 'react';
import './App.css';
import Header from './components/header';
import Tagline from './components/tagline';
import Button from './components/button';
import Content from './components/content';
import Facilities from './components/facilities';
import basic from './basic';
import advance from './advance';
import superior from './superior';

class App extends React.Component {
  state = {
    tagline: [],
    button: [
      { id: 1, name: 'Basic', bgColor: 'grey' },
      { id: 2, name: 'Advanced', bgColor: 'grey' },
      { id: 3, name: 'Superior', bgColor: 'grey' }
    ],
    content: [],
    facilities: []
  }

  option = (id) => {

    if (id === 1) {
      this.setState({ tagline: basic.tagline })
      this.setState({ button: basic.button })
      this.setState({ content: basic.content })
      this.setState({ facilities: basic.facilities })
    }
    else if (id === 2) {
      this.setState({ tagline: advance.tagline })
      this.setState({ button: advance.button })
      this.setState({ content: advance.content })
      this.setState({ facilities: advance.facilities })
    }
    else if (id === 3) {
      this.setState({ tagline: superior.tagline })
      this.setState({ button: superior.button })
      this.setState({ content: superior.content })
      this.setState({ facilities: superior.facilities })
    }
  }

  render() {
    return (
      <div className="page">
        <Header />
        <Tagline tagline={this.state.tagline} />
        <div className="App">
          <div className="button">
            <Button button={this.state.button} change={this.option} />
          </div>
          <h3 style={{ width: 'min-content' }}>Single Health</h3>
          <div className="content">
            <Content content={this.state.content} />
          </div>
          <div style={{ textAlign: "center", fontSize: "12px" }}>
            < img src={require("./images/tick.png")} width="14px" height="14px" alt="tick" />
            <b>What's included</b>
          </div>
          <div className="facility">
            <Facilities facilities={this.state.facilities} />
          </div>
          <div className="get">Get this</div>
          <div className="more">More info ></div>
        </div>
      </div>
    );
  }
}
export default App;
