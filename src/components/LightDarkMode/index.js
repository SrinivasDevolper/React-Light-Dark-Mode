import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isTrue: false}

  darkMode = () => {
    this.setState({isTrue: false})
  }

  whiteMode = () => {
    this.setState({isTrue: true})
  }

  render() {
    const {isTrue} = this.state
    return (
      <div>
        {isTrue ? (
          <div className="bg-container">
            <div className="card1">
              <h1>Click To Change Mode</h1>
              <button onClick={this.darkMode}>Dark Mode</button>
            </div>
          </div>
        ) : (
          <div className="bg-container">
            <div className="card2">
              <h1>Click To Change Mode</h1>
              <button onClick={this.whiteMode}>Light Mode</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default LightDarkMode
