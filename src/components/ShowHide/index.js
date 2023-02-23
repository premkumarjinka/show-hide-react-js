// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isFirst: true, isLast: true}

  isFirst = () => {
    this.setState(prevState => ({isFirst: !prevState.isFirst}))
  }

  isLast = () => {
    this.setState(prevState => ({isLast: !prevState.isLast}))
  }

  render() {
    const {isFirst, isLast} = this.state
    const first = isFirst ? null : <div className="vary">Joe</div>
    const last = isLast ? null : <div className="vary">Jonas</div>

    return (
      <div className="bg-container">
        <div className="head-container">
          <h1 className="heading">Show/Hide</h1>
          <div className="button-container">
            <div className="first-button">
              <button className="btn" type="button" onClick={this.isFirst}>
                show/Hide First name
              </button>

              {first}
            </div>

            <div className="second-button">
              <button className="btn" type="button" onClick={this.isLast}>
                show/Hide Last name
              </button>
              {last}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
