import React from 'react'

import OppRow from './OppRow'
import InputRow from 'client/components/InputRow'

import styles from './styles'

export default function OppsList({
  activeOppId,
  handleChange,
  handleCancel,
  handleUpdate,
  handleEdit,
  handleDelete,
  formData,
  opps
}) {
  const els = opps.map((opp, index) => {
    if (activeOppId === opp.id) {
      return (
        <InputRow
          key={index}
          formData={formData}
          handleChange={handleChange}
          handleCancel={handleCancel}
          handleSubmit={handleUpdate.bind(null, opp.id)}
        />
      )
    }

    return (
      <OppRow
        key={index}
        handleEdit={handleEdit.bind(null, opp)}
        handleDelete={handleDelete.bind(null, opp.id)}
        opp={opp}
      />
    )
  })

  return <div style={styles}>{els}</div>
}

OppsList.propTypes = {
  activeOppId: React.PropTypes.string,
  formData: React.PropTypes.object,
  handleChange: React.PropTypes.func, // Input handler
  handleCancel: React.PropTypes.func, // Input handler
  handleUpdate: React.PropTypes.func, // Input handler
  handleEdit: React.PropTypes.func, // OppRow handler
  handleDelete: React.PropTypes.func, // OppRow handler
  opps: React.PropTypes.array,
}
