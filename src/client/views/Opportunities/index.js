import React from 'react'
import xhr from 'xhr'

import HeaderRow from './HeaderRow'
import OppsList from './OppsList'
import NewOppRow from './NewOppRow'

import styles from './styles'

/*
Need to know which form we are updating...

Existing opps will have an id...

New form will not...

So, could check for the presence of an id...and if no id...then it's a POST,
If not, it's an edit / whatever

Whenever someone is typing in the input...how do I handle that?

Do I need more than one input?

Maybe keep an array of inputs:

[
  {
    title: blah,
    location: blah,
    description: blah,
    id: blah,
  }
]

Then...as the user types...

On edit...would need to grab the seed value from somewhere...

So the state is really opps...and add adds to the opps...

So, each row of inputs needs its respective opps data
*/

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
        contact: ''
      }
    }
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
    const { formData } = this.state

    return (
      <div style={styles.container}>
        <HeaderRow />
        <NewOppRow formData={formData} />
        <OppsList formData={formData} opps={this.state.opps} />
      </div>
    )
  }
}

export default Opportunities
