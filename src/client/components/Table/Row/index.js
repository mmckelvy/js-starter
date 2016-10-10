import React from 'react'

import Cell from './Cell'

import styles from './styles'

export default function Row({ row, isHeader, style}) {
  return (
    <tr style={{...styles, ...style}}>
      {
        Object.keys(row).map((key, index) => {
          if (isHeader) {
            return <Cell key={index}  isHeader>{key}</Cell>
          }

          return <Cell key={index} style={...rest}>{row[key]}</Cell>
        })
      }
    </tr>
  )
}

Row.propTypes = {
  row: React.PropTypes.object, // One row of data (e.g. {name: 'John', email: 'jdoe@gmail.com'})
  isHeader: React.PropTypes.bool,
  headerRowStyles: React.PropTypes.object,
  bodyRowStyles: React.PropTypes.object,
}
