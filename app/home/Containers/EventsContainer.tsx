import React, { useState } from 'react'
import EventsCardContainer from './EventsCardContainer'
import Select from 'react-select'
import { customSelectTheme, customSelectThemeSeverity } from '../Components/utils/customSelectTheme';

const eventTypes: any = [
  {value:'events', label: 'Events'},
  {value:'alerts', label:'Alerts'}, 
]; 

const severityTypes: any = [
  {value:'critical', label:'Critical'}, 
  {value:'warning', label: 'Warning'},
  {value:'normal', label: 'Normal'},
  {value:'all', label: 'All'}
]

function EventsContainer() {
  const [eventOption, setEventOption] = useState('events');
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
          theme={customSelectTheme}
          className='events-dropdown'
          defaultValue={eventOption}
          onChange={handleEventChange}
          options={eventTypes}
          placeholder='Event Type'
        />
        <Select
          theme={customSelectThemeSeverity}
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