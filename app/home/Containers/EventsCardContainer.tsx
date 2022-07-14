import React, { useCallback, useEffect, useState } from 'react'
import AlertCard from '../Components/AlertCard';
import EventCard from '../Components/EventCard';
import LogCard from '../Components/LogCard';
import { useAppSelector } from '../../state/hooks';
import { noEventsAvailable, noAlertsAvailable } from './utils/edgeCaseHandling'


const EventsCardContainer = (props: any) => {
  let namespace: string = useAppSelector(state => state.namespace.currentNamespace) 
  const [ alertsBySeverity, setAlertsBySeverity ] = useState([])
  const [ namespaceEventsBySeverity, setNamespaceEventsBySeverity ] = useState([])

  const renderThis = async (): Promise<any> => {
    if (namespace === '') namespace = 'default'
  
    // logic for alerts
    let allAlerts: any = await window.electron.getAlerts();

    if ((props.severity).toLowerCase() !== 'all' && allAlerts.length !== 0) {
      let alertsBySeverity = allAlerts.reduce((acc:any, el:any) => {
        if ((el.severity).toLowerCase() === props.severity) acc.push(el);
        return acc;
      }, [])
      setAlertsBySeverity(alertsBySeverity)
    }

    else {
      if (!allAlerts.length) allAlerts = [noAlertsAvailable]
      setAlertsBySeverity(allAlerts)
    }
  
    // logic for events
    const allEvents: any = await window.electron.getEvents()
    let namespaceEvents = allEvents.reduce((acc: any, el: any) => {
      if (el.namespace === namespace) acc.push(el);
      return acc;       
    }, [])

    if ((props.severity).toLowerCase() !== 'all' && namespaceEvents.length !== 0) {
      let namespaceEventsBySeverity = namespaceEvents.reduce((acc:any, el:any) => {
        if ((el.type).toLowerCase() === props.severity) acc.push(el);
        return acc;
      }, [])
      setNamespaceEventsBySeverity(namespaceEventsBySeverity)
    }

    else {
      if (!namespaceEvents.length) namespaceEvents = [noEventsAvailable]
      setNamespaceEventsBySeverity(namespaceEvents)
    }
  }

  useEffect(() => {
    namespace = 'default';
    renderThis()
  }, [])

  useEffect(() => {
    renderThis()
  }, [props, namespace])

  const alertsCard: any = alertsBySeverity.map((el: any, i: number) => 
    <AlertCard
      key={`alert${i}`}
      group={el.group}
      state={el.state}
      name={el.name}
      severity={el.severity}
      description={el.description}
      summary={el.summary}
      // alerts={el.alerts}
    />
  );

  const namespaceEventCards: any = namespaceEventsBySeverity.map((el: any, i: number) => 

    <EventCard
      key={`events${i}`}
      last_seen={el.last_seen}
      message={el.message}
      object={el.object}
      reason={el.reason}
      severity={el.type}
    />
  );
  
//   const allLogs: any = events.map((el: any, i: number) => 
//     <LogCard
//       // key={`alert${i}`}
//       // group={el.group}
//       // state={el.state}
//       // name={el.name}
//       // severity={el.sever}
//       // description={el.description}
//       // summary={el.summary}
//       // alerts={el.alerts}
//     />
// ); 
  
  return (
    <div className='events-card-container'>
      {props.eventType === 'alerts' && alertsCard}
      {props.eventType === 'events' && namespaceEventCards}
    </div>
  );
}


export default EventsCardContainer