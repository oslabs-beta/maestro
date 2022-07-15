import React, { useState } from 'react'
import EventsCardContainer from './EventsCardContainer'
import Select from 'react-select'

const eventTypes: any = [
  {value:'alerts', label:'Alerts'}, 
  {value:'events', label: 'Events'}
]; 

const severityTypes: any = [
  {value:'critical', label:'Critical'}, 
  {value:'warning', label: 'Warning'},
  {value:'normal', label: 'Normal'},
  {value:'all', label: 'All'}
]

function EventsContainer() {
  const [eventOption, setEventOption] = useState('alerts');
  const [severityOption, setSeverityOption] = useState('all')

  const handleEventChange = (e: any) => {
    setEventOption(e.value)
  }

  const handleSeverityChange = (e: any) => {
    setSeverityOption(e.value)
  }

  return (
    <div className='events-container'>
      <div className='events-dropdown-container'>
        <Select
          className='events-dropdown'
          defaultValue={eventOption}
          onChange={handleEventChange}
          options={eventTypes}
          placeholder='Event Type'
        />
        <Select
          className='severity-dropdown'
          defaultValue={severityOption}
          onChange={handleSeverityChange}
          options={severityTypes}
          placeholder='Severity'
        />
    </div>
      <EventsCardContainer 
        eventType={eventOption}
        severity={severityOption} 
      />
    </div>
  )
}

export default EventsContainer