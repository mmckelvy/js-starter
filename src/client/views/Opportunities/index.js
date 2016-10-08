import React from 'react'
import xhr from 'xhr'

import HeaderRow from './HeaderRow'
import OppsList from './OppsList'
import InputRow from 'client/components/InputRow'

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
      },
      activeOppId: null // Track which row is in edit mode by opp id
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
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
  }

  handleClear() {
    this.clearForm()
  }

  handleEdit(opp) {
    this.setState({
      activeOppId: opp.id,
      formData: opp
    })
  }

  /**
  What to do here?


  */
  handleUpdate(id) {
    const { opps, formData } = this.state
    // Grab the appropriate opp
    const index = opps.findIndex((opp) => {
      return opp.id === id
    })

    // Make a copy of the opps for update and potential revert
    const newOpps = opps.slice()
    // Update the opps
    newOpps.splice(index, 1, {...newOpps[index], ...formData})

    // Optimistic update
    this.clearForm()
    this.setState({
      opps: newOpps,
      activeOppId: null,
    })
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
    const { activeOppId, formData, opps } = this.state
    const defaultFormData = {
      title: '',
      location: '',
      description: '',
      contact: '',
    }

    return (
      <div style={styles.container}>
        <HeaderRow />
        <InputRow
          formData={!activeOppId ? formData : defaultFormData}
          handleChange={this.handleChange}
          handleSubmit={this.handleAdd}
          handleClear={this.handleClear}
        />
        <OppsList
          opps={opps}
          formData={formData}
          activeOppId={activeOppId}
          handleChange={this.handleChange}
          handleClear={this.handleClear}
          handleUpdate={this.handleUpdate}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
      </div>
    )
  }
}

export default Opportunities
