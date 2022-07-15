import React from 'react'
import MetricsGraphCard from '../Components/MetricsGraphCard'

function GraphContainer() {
  return (
    <div className='graph-container'>
      {/* for namespaces */}
      <MetricsGraphCard/> 
      {/* for nodes */}
      <MetricsGraphCard/>
      {/* for pods */}
      <MetricsGraphCard/>
    </div>
  )
}

export default GraphContainer