import React from 'react'
import HomeGraphCard from '../Components/HomeGraphCard'
import HomeGraphDropdownContainer from './HomeGraphDropdownContainer'
import Select from 'react-select'

function HomeGraphContainer() {
  return (
    <div>
      <Select />
      <HomeGraphCard />
    </div>
  )
}

export default HomeGraphContainer 