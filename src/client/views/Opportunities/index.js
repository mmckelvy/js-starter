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
      // This will hold the temporary state for any new / updated opp
      formData: {
        title: '',
        location: '',
        description: '',
        contact: '',
      }
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(key, event) {
    const { formData } = this.state
    this.setState({formData: {...formData, ...{[key]: event.target.value}}})
  }

  handleAdd() {

  }

  handleEdit() {

  }

  handleClear() {

  }

  handleDelete() {

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
    console.log(this.state.formData)

    return (
      <div style={styles.container}>
        <HeaderRow />
        <NewOppRow handleChange={this.handleChange} />
        <OppsList opps={this.state.opps} />
      </div>
    )
  }
}

export default Opportunities
