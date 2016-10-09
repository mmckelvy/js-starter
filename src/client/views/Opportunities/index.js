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
    this.handleCancel = this.handleCancel.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  /*
  Put the UI back into a read state
  */
  teardownForm() {
    this.setState({
      formData: {
        title: '',
        location: '',
        description: '',
        contact: '',
      },
      activeOppId: null
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
    this.teardownForm()
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

  handleCancel() {
    this.teardownForm()
  }

  handleEdit(opp) {
    this.setState({
      activeOppId: opp.id,
      formData: opp
    })
  }

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
    this.teardownForm()
    this.setState({
      opps: newOpps,
      activeOppId: null,
    })

    // Update server
    xhr({
      method: 'PUT',
      url: `/api/opps/${id}`,
      json: formData
    }, (err, res) => {
      if (err || res.statusCode !== 200) {
        // Rollback if error
        return this.setState({opps})
      }

      // Sync client and server
      return this.setState({
        opps: res.body.opps
      })
    })
  }


  handleDelete(id) {
    const { opps } = this.state

    // Grab the appropriate opp
    const index = opps.findIndex((opp) => {
      return opp.id === id
    })

    // Make a copy of the opps for update and potential revert
    const newOpps = opps.slice()
    // Update the opps
    newOpps.splice(index, 1)

    // Optimistic update
    this.teardownForm()
    this.setState({
      opps: newOpps,
    })

    // Update server
    xhr({
      method: 'DELETE',
      url: `/api/opps/${id}`,
    }, (err, res) => {
      if (err || res.statusCode !== 200) {
        // Rollback if error
        return this.setState({opps})
      }

      // Sync client and server
      return this.setState({
        opps: res.body.opps
      })
    })
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
          handleCancel={this.handleCancel}
        />
        <OppsList
          opps={opps}
          formData={formData}
          activeOppId={activeOppId}
          handleChange={this.handleChange}
          handleCancel={this.handleCancel}
          handleUpdate={this.handleUpdate}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
      </div>
    )
  }
}

export default Opportunities
