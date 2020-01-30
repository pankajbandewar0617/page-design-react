import React from 'react';
import './App.css';
import Header from './components/header';
import Option from './components/option';
import Tagline from './components/tagline';
import Button from './components/button';
import Detail from './components/detail'
import basic from './basic';
import advance from './advance';
import superior from './superior';

class App extends React.Component {
  state = {
    header: [
      { id: 1, src: require('./images/back.jpg'), alt: "back" },
      { id: 2, src: require('./images/home.png'), alt: "home" },
      { id: 3, src: require('./images/human.jpeg'), alt: "profile" }
    ],
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
        <Header header={this.state.header} />
        <Option />
        <Tagline tagline={this.state.tagline} />
        <div className="App">
          <div className="button">
            <Button button={this.state.button} change={this.option} />
          </div>
          <Detail content={this.state.content} facilities={this.state.facilities} />
        </div>
      </div>
    );
  }
}
export default App;
