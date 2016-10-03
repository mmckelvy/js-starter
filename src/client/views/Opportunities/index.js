import React from 'react'
import xhr from 'xhr'

import HeaderRow from './HeaderRow'
import OppsList from './OppsList'
import NewOppRow from './NewOppRow'

import styles from './styles'

class Opportunities extends React.Component {
  constructor() {
    super()

    this.state = {
      opps: [],
      formData: {
        title: '',
        location: '',
        description: '',
        contact: ''
      }
    }
  }

  handleClick() {
    console.log('clicked')
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
    const { formData } = this.state

    return (
      <div style={styles.container}>
        <HeaderRow />
        <NewOppRow formData={formData} />
        <OppsList opps={this.state.opps} />
      </div>
    )
  }
}

export default Opportunities
