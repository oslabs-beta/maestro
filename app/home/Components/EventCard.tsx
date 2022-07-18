import React from 'react'

interface EventCard {
  last_seen: string,
  message: string,
  object: string,
  reason: string,
  severity: string,
}

const EventCard = ({ last_seen, message, object, reason, severity }: EventCard): JSX.Element => {
  return (
    <>
    <div className='event-card'>
      <div className='event-line'>
       <div className='event-description'>Severity:</div>
       <div className='event-content-severity'>{severity}</div>
      </div>
      <div className='event-line'>
       <div className='event-description'>Reason:</div>
       <div className='event-content-reason'>{reason}</div>
      </div>
      <div className='event-line'>
       <div className='event-description'>Last Seen:</div>
       <div className='event-content-last_seen'>{last_seen}</div>
      </div>
      <div className='event-line'>
       <div className='event-description'>Message:</div>
       <div className='event-content-message'>{message}</div>
      </div>
      <div className='event-line'>
       <div className='event-description'>Object:</div>
       <div className='event-content-object'>{object}</div>
      </div>


      {/* <div className='event-line'>
       <div className='event-description'>Summary:</div>
       <div className='event-content-summary'>{summary}</div>
      </div> */}
      {/* <div className='event-line'>
       <div className='event-description'>events:</div>
       <div className='event-content'>{events}</div>
      </div> */}
    </div>
  </>
  )
}

export default EventCard