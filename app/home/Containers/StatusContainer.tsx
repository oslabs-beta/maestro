import React from 'react'
import HomeGraphContainer from './/HomeGraphContainer'
import BubblesContainer from './BubblesContainer'

function StatusContainer() {
  return (
    <div className='status-container'>
      <BubblesContainer />
      <HomeGraphContainer />
    </div>
  )
}

export default StatusContainer