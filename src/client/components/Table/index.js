import React from 'react'

import Row from './Row'
import Cell from './Cell'

export default function Table({ data, columnOrder, style, headerStyle, bodyStyle }) {
  return (
    <table style={{...styles, ...style}}>
      <thead>
        {
          <tr>
            {
              Object.keys(data[0]).map((key, index) => {
                return <th style={headerStyle}>{key}</th>
              })
            }
          </tr>
        }
      </thead>
      <tbody>
        {
          data.map((row, rowIndex) => {
            return (
              <tr>
                {
                  Object.keys(row).map((cell, cellIndex) => {
                    return <td style={bodyStyle}>row[cell]</td>
                  })
                }
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

Table.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.object),
  columnOrder: React.PropTypes.array, // Order of columns
  style: React.PropTypes.object, // Overall table style
  headerStyle: React.PropTypes.object,
  bodyStyle: React.PropTypesobject.
}
