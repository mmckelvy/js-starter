import React from 'react'

import styles from './styles'

export default function Table({ data, columnOrder, style, headerStyle, bodyStyle }) {
  return (
    <table style={{...styles, ...style}}>
      <thead>
        {
          <tr>
            {
              Object.keys(data[0]).map((key, index) => {
                return <th key={index} style={headerStyle}>{key}</th>
              })
            }
          </tr>
        }
      </thead>
      <tbody>
        {
          data.map((row, rowIndex) => {
            return (
              <tr key={rowIndex}>
                {
                  Object.keys(row).map((key, cellIndex) => {
                    return <td key={cellIndex} style={bodyStyle}>{row[key]}</td>
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
  bodyStyle: React.PropTypes.object,
}
