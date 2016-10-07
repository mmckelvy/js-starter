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
    this.handleClear = this.handleClear.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleChange(key, event) {
    const { formData } = this.state
    this.setState({formData: {...formData, ...{[key]: event.target.value}}})
  }

  // Add an opportunity to the list.
  handleAdd() {
    const { opps, formData } = this.state
    // Add the new item to the opps
    const updatedOpps = opps.concat([formData])
    // Update state
    this.setState({
      opps: updatedOpps
    })

    // Update the current list
    // Submit ajax request
    // Reconcile
    // What else...need to validate the form...
    // Buttons only show once all the data is populated...
  }

  handleClear() {
    this.setState({
      formData: {
        title: '',
        location: '',
        description: '',
        contact: '',
      }
    })
  }

  handleEdit() {

  }


  handleDelete() {

  }

  componentDidMount() {
    // Load the current opportunities
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
    const { formData, opps } = this.state

    return (
      <div style={styles.container}>
        <HeaderRow />
        <NewOppRow
          formData={formData}
          handleChange={this.handleChange}
          handleAdd={this.handleAdd}
          handleClear={this.handleClear}
        />
        <OppsList opps={opps} />
      </div>
    )
  }
}

export default Opportunities
