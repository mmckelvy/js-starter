import React from 'react'
import xhr from 'xhr'

import HeaderRow from './HeaderRow'
import OppsList from './OppsList'

import styles from './styles'

class Opportunities extends React.Component {
  constructor() {
    super()

    this.state = {
      opps: []
    }
  }

  componentDidMount() {
    xhr({
      method: 'GET',
      url: '/api/opps',
    }, (err, res) => {
      if (err || res.statusCode !== 200) {
        console.log(err)
      } else {
        this.setState({
          opps: JSON.parse(res.body).opps
        })
      }
    })
  }

  render() {
    return (
      <div style={styles}>
        <HeaderRow />
        <OppsList opps={this.state.opps} />
      </div>
    )
  }
}

export default Opportunities
