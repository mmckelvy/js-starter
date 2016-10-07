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

  clearForm() {
    this.setState({
      formData: {
        title: '',
        location: '',
        description: '',
        contact: '',
      }
    })
  }

  handleChange(key, event) {
    const { formData } = this.state
    this.setState({formData: {...formData, ...{[key]: event.target.value}}})
  }

  // Add an opportunity to the list.
  handleAdd() {
    const { opps, formData } = this.state
    // Optimistic update
    this.clearForm()
    this.setState({
      opps: opps.slice().concat([formData])
    })

    // Update server
    xhr({
      url: '/api/opps',
      method: 'POST',
      json: formData,
    }, (err, res) => {
      if (err || res.statusCode !== 201) {
        // Rollback if error
        return this.setState({opps})
      }

      // Sync client and server
      return this.setState({
        opps: res.body.opps
      })
    })
    // Update the current list
    // Submit ajax request
    // Reconcile
    // What else...need to validate the form...
    // Buttons only show once all the data is populated...
  }

  handleClear() {
    this.clearForm()
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
