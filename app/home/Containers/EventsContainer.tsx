import React from 'react'
import EventsCardContainer from './EventsCardContainer'
import EventsDropdownContainer from './EventsDropdownContainer'

function EventsContainer() {
  return (
    <div className='events-container'>
      <EventsDropdownContainer />
      <EventsCardContainer />
    </div>
  )
}

export default EventsContainer