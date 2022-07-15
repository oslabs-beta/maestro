import React from 'react'
import GraphContainer from './GraphContainer'

function MetricsContainer() {
  return (
    <div className="metrics-container">
      <GraphContainer/>
      <GraphContainer/>
      <GraphContainer/>
    </div>
  )
}

export default MetricsContainer